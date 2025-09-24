import { NextResponse } from "next/server";
import TempMemberCounter from "@/app/models/TempMemberCounter";
import clientPromise from "@/lib/mongodb";

export async function POST(req:Request) {
    
    const { initialLetter } = await req.json();
    const letter = (initialLetter || "X").toUpperCase();
    const client = await clientPromise;
    const db = client.db("UAMForm");
    const collection = db.collection("temp-member-counters");


    const counter = await collection.findOneAndUpdate(
        { letter },
        { $inc : { lastNumber: 1 } },
        { returnDocument: "after", upsert: true }
    );

    return NextResponse.json({
        tempNumber: `TG${letter}${counter?.lastNumber}`
    })
}