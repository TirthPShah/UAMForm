import { GradeType } from "../options";

export interface ChildUnder18Data {

    childUnder18Name: string;
    childUnder18DateOfBirth: string;
    childUnder18Gender: "Male" | "Female";
    childUnder18PlaceOfStudy: "School" | "Diploma" | "Too Small To Study"
    childUnder18Grade?: GradeType;
    childUnder18StudyInstituteName?: string;
    childUnder18Stream?: "Commerce" | "Science" | "Arts";
    childUnder18DiplomaSpecialization?: string;
    childUnder18MobileNumber: string;
    childUnder18Hobbies: string;

}

export const defaultChildUnder18Data : ChildUnder18Data = {

    childUnder18Name: "",
    childUnder18DateOfBirth: "",
    childUnder18Gender: "Male",
    childUnder18PlaceOfStudy: "School",
    childUnder18StudyInstituteName: "",
    childUnder18MobileNumber: "",
    childUnder18Hobbies: ""

}