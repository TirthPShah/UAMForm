import { BloodGroupType, CountryType, MaritalStatusType, MembershipType, ProfessionType } from "../options";

export interface HoFData {

    headOfFamilyName: string;
    headOfFamilyMembershipNumber: string;
    headOfFamilyMembershipType: MembershipType;
    headOfFamilyDateOfBirth: string;
    headOfFamilyGender: "Male" | "Female";
    headOfFamilyEmail: string;
    headOfFamilyMobile: string;
    headOfFamilySecondaryMobile?: string;
    headOfFamilyMaritalStatus: MaritalStatusType;
    headOfFamilyAddress: string;
    headOfFamilyPinCode: string;
    headOfFamilyCity: string;
    headOfFamilyState: string;
    headOfFamilyCountry: CountryType;
    headOfFamilyLat?: string;
    headOfFamilyLon?: string;
    headOfFamilyEducation: string;
    headOfFamilyProfession: ProfessionType;
    headOfFamilyDesignation?: string;
    headOfFamilyOrganisation?: string;
    headOfFamilyBusinessAddress?: string;
    headOfFamilyBusinessDocs?: FileList | string | null;
    headOfFamilyPhoto: File | string | null;
    headOfFamilyBloodGroup: BloodGroupType;
    headOfFamilyBloodGroupOthers?: string;
    headOfFamilyIsBloodDonor: "Yes" | "No";
    headOfFamilyHobbies?: string;
    headOfFamilyExtraNotes?: string;

}

// 🔹 Centralized defaults
export const defaultHoFData: HoFData = {

  headOfFamilyName: "",
  headOfFamilyMembershipNumber: "",
  headOfFamilyMembershipType: "Regular",   // sensible default
  headOfFamilyDateOfBirth: "",
  headOfFamilyGender: "Male",
  headOfFamilyEmail: "",
  headOfFamilyMobile: "",
  headOfFamilySecondaryMobile: "",
  headOfFamilyMaritalStatus: "Married - Within Samaj",     // sensible default
  headOfFamilyAddress: "",
  headOfFamilyPinCode: "",
  headOfFamilyCity: "Ahmedabad",
  headOfFamilyState: "Gujarat",
  headOfFamilyCountry: "India",            // or null if strict
  headOfFamilyEducation: "",
  headOfFamilyProfession: "Employee",
  headOfFamilyPhoto: null,
  headOfFamilyBloodGroup: "O+",            // pick a common default
  headOfFamilyIsBloodDonor: "No",
};