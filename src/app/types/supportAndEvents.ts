import { SupportType } from "../options";

export interface SupportAndEventsData {

    supportAndEventsEventsFutureIdeas: string;
    supportAndEventsWillingToParticipate: "Yes" | "No";
    supportAndEventsWillingToSupport: "Yes" | "No";
    supportAndEventsWillingSupportTypes?: SupportType[];
    supportAndEventsWadiShouldBeCreated: "Yes" | "No";
    supportAndEventsWillingToSupportTypeOthers?: string;
    supportAndEventsExtraNotes: string;

}

export const SupportAndEventsDefaultData : SupportAndEventsData = {

    supportAndEventsEventsFutureIdeas: "",
    supportAndEventsWillingToParticipate: "Yes",
    supportAndEventsWillingToSupport: "No",
    supportAndEventsWillingSupportTypes: [],
    supportAndEventsWadiShouldBeCreated: "Yes",
    supportAndEventsWillingToSupportTypeOthers: "",
    supportAndEventsExtraNotes: ""
    
}