// Remove zod imports and schemas, use plain TypeScript types instead

export interface ChildUnder18 {
  name?: string;
  dob?: Date;
  gender?: 'Male' | 'Female' | 'Other';
  school?: string;
  grade?: string;
  mobile?: string;
  appInstalled?: 'Yes' | 'No';
}

export interface ChildOver18 {
  name?: string;
  dob?: Date;
  gender?: 'Male' | 'Female' | 'Other';
  profession?: string;
  professionOrgName?: string;
  professionOrgAddress?: string;
  maritalStatus?: 'Single' | 'Divorced' | 'Widowed' | 'Other' | 'Married - Outside Samaj' | 'Divorced - Outside Samaj' | 'Widowed - Outside Samaj' | 'Married - Within Samaj' | 'Divorced - Within Samaj' | 'Widowed - Within Samaj';
  mobile?: string;
  email?: string;
}

export interface MembershipFormData {
  hofName?: string;
  membershipNumber?: string;
  membershipType?: 'Lifetime' | 'Regular';
  hofDob?: Date;
  hofGender?: 'Male' | 'Female' | 'Other';
  hofEmail?: string;
  hofMobile?: string;
  hofAddressStreet?: string;
  hofAddressCity?: string;
  hofAddressState?: string;
  hofAddressPostalCode?: string;
  hofAddressCountry?: string;
  hofProfession?: string;
  hofProfessionOrgName?: string;
  hofProfessionOrgAddress?: string;
  hofMaritalStatus?: 'Single' | 'Married - Outside Samaj' | 'Married - Within Samaj' | 'Divorced - Outside Samaj' | 'Divorced - Within Samaj' | 'Widowed - Outside Samaj' | 'Widowed - Within Samaj' | 'Other';
  spouseName?: string;
  spouseDob?: Date;
  spouseGender?: 'Male' | 'Female' | 'Other';
  spouseProfession?: string;
  spouseProfessionOrgName?: string;
  spouseProfessionOrgAddress?: string;
  childrenUnder18?: ChildUnder18[];
  childrenOver18?: ChildOver18[];
  ujaniPastOverallExperience?: string;
  ujaniPastLastTwoYears?: string;
  ujaniAttendRegularly?: 'Yes' | 'No';
  ujaniReasonIfNotAttending?: string;
  ujaniFutureSuggestions?: string;
  ujaniSamajExpectations?: string;
  samajFacingChallenges?: 'Yes' | 'No';
  samajChallengesDescription?: string;
  samajIncreaseTogethernessIdeas?: string;
  samajFutureEventsIdeas?: string;
  samajWillingToParticipateEvents?: 'Yes' | 'No';
  samajWadiConstructionThoughts?: string;
  samajWillingToSupportEvents?: 'Yes' | 'No';
  samajSupportMethods?: string[];
  samajOtherSupportMethod?: string;
}

export interface UjaniFeedbackFormData {
  name?: string;
  email?: string;
}

export interface MemberListData {
  id: string;
  name: string;
  address: string;
  mobile: string;
  surveyed: boolean;
}