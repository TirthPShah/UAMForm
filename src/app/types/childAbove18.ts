import { BloodGroupType, CountryType, MaritalStatusType, ProfessionType } from "../options";

export interface ChildAbove18Data {

    childAbove18Name: string;
    childAbove18DateOfBirth: string;
    childAbove18Gender: "Male" | "Female";
    childAbove18MobileNumber: string;
    childAbove18IsMember: "Yes" | "No";
    childAbove18MembershipNumber?: string;
    childAbove18BloddGroup: BloodGroupType;
    childAbove18BloodGroupOthers?: string;    
    childAbove18IsBloodDonor: "Yes" | "No";
    childAbove18AddressSameAsParents: "Yes" | "No";
    childAbove18Address: string;
    childAbove18City: string;
    childAbove18State: string;
    childAbove18Country: CountryType;
    childAbove18Education: string;
    childAbove18Profession: ProfessionType;
    childAbove18StudyLevel?: "School" | "Diploma / Degree (Bachelors, Master, PHD)";
    childAbove18StudyInstituteName?: string;
    childAbove18Grade?: "9" | "10" | "11" | "12";
    childAbove18Stream?: "Commerce" | "Science" | "Arts";
    childAbove18Degree?: string;
    childAbove18Specialization?: string;
    childAbove18Designation?: string;
    childAbove18Organisation?: string;
    childAbove18BusinessAddress?: string;
    childAbove18BusinessDocs?: FileList | string | null;
    childAbove18Hobbies: string;
    childAbove18MaritalStatus: MaritalStatusType;
    childAbove18SpouseName?: string;
    childAbove18SpouseDateOfBirth?: string;
    childAbove18SpouseAge?: number;
    childAbove18SpouseMobileNumber?: string;
    childAbove18SpouseBloodGroup?: BloodGroupType;
    childAbove18SpouseBloodGroupOthers?: string;
    childAbove18SpouseEducation?: string;
    childAbove18SpouseProfession?: ProfessionType;
    childAbove18SpouseDegree?: string;
    childAbove18SpouseSpecialization?: string;
    childAbove18SpouseDesignation?: string;
    childAbove18SpouseOrganisation?: string;
    childAbove18SpouseBusinessAddress?: string;
    childAbove18SpouseBusinessDocs?: FileList | string | null;
    childAbove18SpouseHobbies?: string;
    childAbove18ExtraNotes: string;

}

export const ChildAbove18DefaultData : ChildAbove18Data = {

    childAbove18Name: "",
    childAbove18DateOfBirth: "",
    childAbove18Gender: "Male",
    childAbove18MobileNumber: "",
    childAbove18IsMember: "No",
    childAbove18BloddGroup: "O+",
    childAbove18IsBloodDonor: "No",
    childAbove18AddressSameAsParents: "Yes",
    childAbove18Address: "",
    childAbove18City: "",
    childAbove18State: "",
    childAbove18Country: "India",
    childAbove18Education: "",
    childAbove18Profession: "Employee",
    childAbove18Hobbies: "",
    childAbove18MaritalStatus: "Single",
    childAbove18ExtraNotes: ""

}