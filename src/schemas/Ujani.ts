import { FieldSchema } from "./type";

export const ujaniSchema: FieldSchema[] = [
  { name: "ujaniFood", label: "Food Rating", type: "select", options: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"], required: true },
  { name: "ujaniFoodComment", label: "Food Comment", type: "textarea" },
  { name: "ujaniHygiene", label: "Hygiene Rating", type: "select", options: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"], required: true },
  { name: "ujaniHygieneComment", label: "Hygiene Comment", type: "textarea" },
  { name: "ujaniManagement", label: "Management Rating", type: "select", options: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"], required: true },
  { name: "ujaniManagementComment", label: "Management Comment", type: "textarea" },
  { name: "ujaniEvents", label: "Events Rating", type: "select", options: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"], required: true },
  { name: "ujaniEventsComment", label: "Events Comment", type: "textarea" },
  { name: "ujaniAttendedRegularly", label: "Attended Regularly", type: "select", options: ["Yes", "No"], required: true },
  { name: "ujaniNotAttendedReason", label: "Not Attended Reason", type: "textarea", visible: (data: any) => data.ujaniAttendedRegularly === "No" },
  { name: "ujaniExtraNotes", label: "Extra Notes", type: "textarea", placeholder: "If some other information is required, please mention it here" },
];
