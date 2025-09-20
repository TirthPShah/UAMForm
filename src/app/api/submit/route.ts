// src/app/api/submit/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import clientPromise from "@/lib/mongodb";

const oauth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://uam-form.vercel.app/oauth"
)

oauth.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

const drive = google.drive({ version : "v3", auth: oauth});

async function uploadToDrive(file:File, folderId : string) {
    
    const buffer = Buffer.from(await file.arrayBuffer())
    const stream = Readable.from(buffer)

    const res = await drive.files.create({
        requestBody: {
            name: file.name,
            parents: [folderId],
        },
        media: {
            mimeType: file.type,
            body: stream,
        },
        fields: "id",
    });

    const fileId = res.data.id!;

    await drive.permissions.create({
        fileId,
        requestBody: {
            role: "reader",
            type: "anyone",
        },
    });

    return `https://drive.google.com/file/d/${fileId}/view`;

}

async function formDataToJson(formData: FormData, folderId: string) {
  const result: any = {};

  for (const [key, value] of formData.entries()) {
    const path = key.replace(/\]/g, "").split("["); // childrenAbove18[0][childName] → [childrenAbove18,0,childName]
    console.log(path);
    let current = result;

    for (let i = 0; i < path.length; i++) {
      const segment = path[i];

      if (i === path.length - 1) {
        // Last segment → assign value
        if (value instanceof File) {
          current[segment] = await uploadToDrive(value, folderId); // ✅ await properly
        } else {
          current[segment] = value;
        }
      } else {
        if (!current[segment]) {
          current[segment] = isNaN(Number(path[i + 1])) ? {} : [];
        }
        current = current[segment];
      }
    }
  }

  return result;
}



export async function POST(req: Request) {

    try {

        const formData = await req.formData();

        console.log("=== Received FormData ===");

        for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
            console.log(`${key}: File -> name=${value.name}, size=${value.size}, type=${value.type}`);
        } else {
            console.log(`${key}: ${value}`);
        }
        }

        const folderId = process.env.GDRIVE_FOLDER_ID;

        const json = await formDataToJson(formData, folderId as string);

        const client = await clientPromise;
        const db = client.db("UAMForm");
        const collection = db.collection("uam-form");

        await collection.insertOne({
            ...json,
            createdAt: new Date(),
        });

        console.log("After Google Drive");
        console.dir(json, {depth : null})

        return NextResponse.json({ success: true, message: "Data stored successfully!" });
    } catch (err) {
        console.error("Error parsing FormData:", err);
        return NextResponse.json({ success: false, error: "Invalid form data" }, { status: 400 });
    }
}
