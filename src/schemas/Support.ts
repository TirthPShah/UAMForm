import { FieldSchema } from "./type";

export const supportSchema: FieldSchema[] = [
  { name: "eventsFutureIdeas", label: "Events Future Ideas", type: "textarea" },
  { name: "eventsWillingToParticipate", label: "Willing to Participate", type: "select", options: ["Yes", "No"] },
    { name: "eventsWillingToSupport", label: "Willing to Support", type: "select", options: ["Yes", "No"] },
  { name: "eventsSupportingMethod", label: "If yes, how? (Select all that apply)", type: "checkbox", group: "eventsSupportingMethod", options: [
    'Sharing Contacts',
    'Physical Support (Setup, Event Management, etc.)',
    'Marketing & Publicity',
    'Communication & Coordination',
    'Hosting or Hospitality',
    'Monetary Contribution',
    'Others',
  ], visible: (data: any) => data.eventsWillingToSupport === "Yes" },
  { name: "wadiShouldBeCreated", label: "Wadi Should Be Created", type: "select", options: ["Yes", "No"] },
    { name: "wadiExtraNotes", label: "Extra Notes", type: "textarea", placeholder: "If some other information is required, please mention it here" },
];
