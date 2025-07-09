import { FieldSchema } from "./type";

export const spouseSchema: FieldSchema[] = [
  { name: "spouseName", label: "Spouse Name", type: "text", required: true },
  { name: "spouseDob", label: "Spouse's Date of Birth", type: "date", required: true },
  { name: "spouseGender", label: "Spouse's Gender", type: "radio", options: ["Male", "Female"], required: true },
  { name: "spouseMobile", label: "Spouse's Mobile Number", type: "phone", required: true },
  { name: "spouseBloodGroup", label: "Spouse's Blood Group", type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Others"], required: true },
  { name: "spouseIsBloodDonor", label: "Spouse Is Blood Donor", type: "select", options: ["Yes", "No"], required: true },
  { name: "spouseHighestEducation", label: "Highest Education", type: "text" },
  { name: "spouseProfession", label: "Profession", type: "select", options: ["Employee", "Self Employed", "Retired", "Other"], required: true },
  { name: "spouseEmployeeDesignation", label: "Designation", type: "text", placeholder: "Software Engineer, C.A., Doctor, etc.", visible: (data: any) => data.spouseProfession === "Employee" },
  { name: "spouseEmployeeOrganizationName", label: "Organization Name", type: "text", placeholder: "Organization Name", visible: (data: any) => data.spouseProfession === "Employee" },
  { name: "spouseSelfEmployedProfession", label: "Profession", type: "text", placeholder: "Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, etc.", visible: (data: any) => data.spouseProfession === "Self Employed" },
  { name: "spouseSelfEmployedOrganizationName", label: "Organization Name", type: "text", visible: (data: any) => data.spouseProfession === "Self Employed" },
  { name: "spouseSelfEmployedOrganizationAddress", label: "Organization Address", type: "text", placeholder: "City, State, Country", visible: (data: any) => data.spouseProfession === "Self Employed" },
  { name: "spouseSelfEmployedBusinessCard", label: "Business Card", type: "file", visible: (data: any) => data.spouseProfession === "Self Employed" },
  { name: "spouseRetiredDesignation", label: "Designation", type: "text", placeholder: "Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, etc.", visible: (data: any) => data.spouseProfession === "Retired" },
  { name: "spouseRetiredOrganizationName", label: "Previous Organization Name", type: "text", visible: (data: any) => data.spouseProfession === "Retired" },
  { name: "spouseExtraQualificationAndMastery", label: "Extra Qualification and Mastery", type: "textarea" },
  { name: "spouseExtraNotes", label: "Extra Notes", type: "textarea", placeholder: "If some other information is required, please mention it here" },
];
