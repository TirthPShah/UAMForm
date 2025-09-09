import { BloodGroupType, ProfessionType } from "../options";

export interface SpouseData {

    spouseName?: string;
    spouseDateOfBirth?: string;
    spouseGender?: "Male" | "Female";
    spouseMobileNumber?: string;
    spouseBloodGroup?: BloodGroupType;
    spouseBloodGroupOthers?: string;
    spouseIsBloodDonor?: "Yes" | "No";
    spouseEducation?: string;
    spouseProfession?: ProfessionType;
    spouseDesignation?: string;
    spouseOrganisation?: string;
    spouseBusinessAddress?: string;
    spouseBusinessDocs?: FileList | null;
    spouseHobbies?: string;
    spouseExtraNotes?: string;

}

export const defaultSpouseData : SpouseData = {

    spouseName: "",
    spouseDateOfBirth: "",
    spouseGender: "Male",
    spouseMobileNumber: "",
    spouseBloodGroup: "A+",
    spouseBloodGroupOthers: "",
    spouseIsBloodDonor: "No",
    spouseEducation: "",
    spouseProfession: "Home Maker (House Wife)",
    spouseDesignation: "",
    spouseOrganisation: "",
    spouseBusinessAddress: "",
    spouseBusinessDocs: null,
    spouseHobbies: "",
    spouseExtraNotes: ""

}