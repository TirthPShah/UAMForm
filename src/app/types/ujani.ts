import { RatingType } from "../options";

export interface UjaniData {

    ujaniFoodRating: RatingType;
    ujaniHygieneRating: RatingType;
    ujaniManagementRating: RatingType;
    ujaniEventsRating: RatingType;
    ujaniAttendedRegularly: "Yes" | "No";
    ujaniNotAttendedRegularlyReason?: string;
    ujaniExtraNotes: string;

}

export const ujaniDefaultData : UjaniData = {

    ujaniFoodRating: "Excellent",
    ujaniHygieneRating: "Excellent",
    ujaniManagementRating: "Excellent",
    ujaniEventsRating: "Excellent",
    ujaniAttendedRegularly: "Yes",
    ujaniNotAttendedRegularlyReason: "",
    ujaniExtraNotes: ""
    
}