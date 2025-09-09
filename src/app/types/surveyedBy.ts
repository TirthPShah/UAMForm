export interface SurveyedByData {
    surveyedByTeam: "Team 1" | "Team 2" | "Team 3" | "Team 4" | "Team 5"
    surveyedByNotes: string;
}

export const SurveyedByDefaultData : SurveyedByData = {
    surveyedByTeam: "Team 1",
    surveyedByNotes: ""
}