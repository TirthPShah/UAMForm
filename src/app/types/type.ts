import { ChildAbove18Data, ChildAbove18DefaultData } from "./childAbove18";
import { ChildUnder18Data, defaultChildUnder18Data } from "./childUnder18";
import { ExtrasData, ExtrasDefaultData } from "./extras";
import { defaultHoFData, HoFData } from "./hof";
import { defaultSpouseData, SpouseData } from "./spouse";
import { SupportAndEventsData, SupportAndEventsDefaultData } from "./supportAndEvents";
import { SurveyedByData, SurveyedByDefaultData } from "./surveyedBy";
import { UjaniData, ujaniDefaultData } from "./ujani";
import { UjaniFutureIdeasData, UjaniFutureIdeasDefaultData } from "./ujaniFutureIdeas";

export type FormData = HoFData & SpouseData & {
    childrenUnder18?: ChildUnder18Data[]
} & {
    childrenAbove18?: ChildAbove18Data[]
} & UjaniData & UjaniFutureIdeasData & SupportAndEventsData & ExtrasData & SurveyedByData;

export const defaultFormData : FormData = {
    ...defaultHoFData,
    ...defaultSpouseData,
    childrenUnder18: [defaultChildUnder18Data],
    childrenAbove18: [ChildAbove18DefaultData],
    ...ujaniDefaultData,
    ...UjaniFutureIdeasDefaultData,
    ...SupportAndEventsDefaultData,
    ...ExtrasDefaultData,
    ...SurveyedByDefaultData
};