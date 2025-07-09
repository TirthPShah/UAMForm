# Multi Step Form

## Section : Head of Family

- name: hofname, label: Head of Family Name, type: text

- name: hofMembershipNumber, label: Head of Family Membership Number, type: text

- name: hofMembershipType, label: Head of Family Membership Type, type: select, options: [Lifetime, Regular]

- name: hofDob, label: Head of Family Date of Birth, type: date

- name: hofGender, label: Head of Family Gender, type: select, options: [Male, Female]

- name: hofEmail, label: Head of Family Email, type: email

- name: hofMobile, label: Head of Family Mobile, type: phone

- name: hofSecondMobile, label: Head of Family Second Mobile, type: phone

- name: hofAddress, label: Head of Family Address, type: textarea

- name: hofAddressPostalCode, label: Head of Family Address Postal Code, type: text, placeholder: "Postal Code"

- name: hofPhoto, label: Head of Family Photo, type: file, accept: onlyOne, allow: from files and camera both

- name: hofBloodGroup, label: Head of Family Blood Group, type: select, options: [A+, A-, B+, B-, AB+, AB-, O+, O-, Others]

- name: hofIsBloodDonor, label: Head of Family Is Blood Donor, type: select, options: [Yes, No]

- name: hofMaritalStatus, label: Head of Family Marital Status, type: select, options: [Single, Married - Outside Samaj, Married - Within Samaj, Divorced - Outside Samaj, Divorced - Within Samaj, Widowed - Outside Samaj, Widowed - Within Samaj]

- name: hofCountryOfResidence, label: Head of Family Country of Residence, type: select, options: [Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antigua &amp; Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia &amp; Herzegovina, Botswana, Brazil, British Virgin Islands, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Cape Verde, Cayman Islands, Chad, Chile, China, Colombia, Congo, Cook Islands, Costa Rica, Cote D Ivoire, Croatia, Cruise Ship, Cuba, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Estonia, Ethiopia, Falkland Islands, Faroe Islands, Fiji, Finland, France, French Polynesia, French West Indies, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guam, Guatemala, Guernsey, Guinea, Guinea Bissau, Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Isle of Man, Israel, Italy, Jamaica, Japan, Jersey, Jordan, Kazakhstan, Kenya, Kuwait, Kyrgyz Republic, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Mauritania, Mauritius, Mexico, Moldova, Monaco, Mongolia, Montenegro, Montserrat, Morocco, Mozambique, Namibia, Nepal, Netherlands, Netherlands Antilles, New Caledonia, New Zealand, Nicaragua, Niger, Nigeria, Norway, Oman, Pakistan, Palestine, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Puerto Rico, Qatar, Reunion, Romania, Russia, Rwanda, Saint Pierre &amp; Miquelon, Samoa, San Marino, Satellite, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, South Africa, South Korea, Spain, Sri Lanka, St Kitts &amp; Nevis, St Lucia, St Vincent, St. Lucia, Sudan, Suriname, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor L'Este, Togo, Tonga, Trinidad &amp; Tobago, Tunisia, Turkey, Turkmenistan, Turks &amp; Caicos, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States of America, Uruguay, Uzbekistan, Venezuela, Vietnam, Virgin Islands (US), Yemen, Zambia, Zimbabwe]

- name: hofExtraNotes, label: Head of Family Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here"

## Section : Spouse (Hidden only when hofMaritalStatus is Single, else in the case of Married - Outside Samaj, Married - Within Samaj, Divorced - Outside Samaj, Divorced - Within Samaj, Widowed - Outside Samaj, Widowed - Within Samaj, the spouse section will be shown)

- name: spouseName, label: Spouse Name, type: text
- name: spouseDob, label: Spouse's Date of Birth, type: date
- name: spouseGender, label: Spouse's Gender, type: radio, options: [Male, Female]
- name: spouseMobile, label: Spouse's Mobile Number, type: phone
- name: spouseBloodGroup, label: Spouse's Blood Group, type: select, options: [A+, A-, B+, B-, AB+, AB-, O+, O-, Others]
- name: spouseIsBloodDonor: label: Spouse Is Blood Donor, type: select, options: [Yes, No]

- name: spouseHighestEducation, label: Highest Education, type: text

- name: spouseProfession, label: Profession, type: select, options: [Employee, Self Employed, Retired, Other], group them under spouseProfession and each of the checkbox which gets selected will be included in spouseProfession array

- name: spouseEmployeeDesignation, label: Designation, type: text, placeholder: "Software Engineer, C.A., Doctor, etc.", visible: when spouseProfession is Employee

- name: spouseEmployeeOrganizationName, label: Organization Name, type: text, placeholder: "Organization Name", visible: when spouseProfession is Employee

- name: spouseSelfEmployedProfession, label: Profession, type: text, placeholder: "Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, etc.", visible: when spouseProfession is Self Employed

- name: spouseSelfEmployedOrganizationName, label: Organization Name, type: text, , visible: when spouseProfession is Self Employed

- name: spouseSelfEmployedOrganizationAddress, label: Organization Address, type: text, , placeholder: "City, State, Country", visible: when spouseProfession is Self Employed

- name: spouseSelfEmployedBusinessCard, label: Business Card, type: file, , visible: when spouseProfession is Self Employed, accept: many, allow: from files and camera both

- name: spouseRetiredDesignation, label: Designation, type: text, placeholder: "Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, etc.", , visible: when spouseProfession is Retired

- name: spouseRetiredOrganizationName, label: Previous Organization Name, type: text, , visible: when spouseProfession is Retired

- name: spouseExtraQualificationAndMastery, label: Extra Qualification and Mastery, type: textarea, , visible: when spouseProfession is Retired

- name: spouseExtraNotes, label: Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here", , visible: when spouseProfession is Retired


## Section : Child Under 18 (This will be one main section and initially there wont be any children over here, user can add children as per their need with the help of Add Child Button, which after submitting will be an array under the name of childrenUnder18 and each child will have the same schema as mentioned below)

- name: childUnder18Name, label: Name, type: text, 

- name: childUnder18Dob, label: Date of Birth, type: date, 

- name: childUnder18Gender, label: Gender, type: select, options: [Male, Female], 

- name: childUnder18MobileNumber, label: Mobile Number, type: text, 

- name: childUnder18BloodGroup, label: Blood Group, type: select, options: [A+, A-, B+, B-, AB+, AB-, O+, O-, Others], 

- name: childUnder18IsBloodDonor, label: Is Blood Donor, type: select, options: [Yes, No], 

- name: childUnder18PlaceOfStudy, label: Place of Study, type: select, options: [School, Diploma, Too small to study], 

- name: childUnder18SchoolClass, label: Class/Grade/Standard, type: select, options: [Nursery, LKG, UKG, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], , visible: when childUnder18PlaceOfStudy is School

- name: childUnder18DiplomaYear, label: Year of Diploma, type: select, options: [1, 2, 3, 4], , visible: when childUnder18PlaceOfStudy is Diploma

- name: childUnder18DiplomaSpec, label: Diploma Specialization, type: text, , visible: when childUnder18PlaceOfStudy is Diploma

- name: childUnder18Hobbies, label: Hobbies, type: textarea, 

- name: childUnder18Interests, label: Expertise, type: textarea, 

- name: childUnder18ExtraNotes, label: Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here", 


## Section : Children Above 18 (This will be one main section and initially there wont be any children over here, user can add children as per their need with the help of Add Child Button, which after submitting will be an array under the name of childrenAbove18 and each child will have the same schema as mentioned below)

- name: childAbove18Name, label: Name, type: text, 

- name: childAbove18Dob, label: Date of Birth, type: date, 

- name: childAbove18Gender, label: Gender, type: select, options: [Male, Female], 

- name: childAbove18MobileNumber, label: Mobile Number, type: text, 

- name: childAbove18BloodGroup, label: Blood Group, type: select, options: [A+, A-, B+, B-, AB+, AB-, O+, O-, Others], 

- name: childAbove18IsBloodDonor, label: Is Blood Donor, type: select, options: [Yes, No], 

- name: childAbove18Address, label: Address, type: text, , placeholder: "City, State, Country"

- name: childAbove18Profession, label: Profession, type: select, options: [Student, Employee, Self Employed, Retired, Other], , group them under childAbove18Profession and each of the checkbox which gets selected will be included in childAbove18Profession array

- name: childAbove18StudentStudyLevel, label: Study Level, type: select, options: [School, Diploma, Bachelor, Master, Doctorate], , visible: when childAbove18Profession is Student

- name: childAbove18StudentSchoolStandard, label: School Standard, type: select, options: [9, 10, 11, 12], , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is School

- name: childAbove18StudentDiplomaYear, label: Year of Diploma, type: select, options: [1, 2, 3, 4], , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Diploma

- name: childAbove18StudentBachelorDegree, label: Degree, type: datalist, options: [B.A., B.Sc., B.Com., B.B.A., B.Tech., B.E., B.M.S., B.S., B.L., B.Ed., B.Pharm., B.Arch., B.F.A., B.M., B.D., B.Drama., B.Com., B.B.A., B.Tech., B.E., B.M.S., B.S., B.L., B.Ed., B.Pharm., B.Arch., B.F.A., B.M., B.D., B.Drama., Others].sort(), , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Bachelor

- name: childAbove18StudentMasterDegree, label: Degree, type: datalist, options: [M.A., M.Sc., M.Com., M.B.A., M.Tech., M.E., M.M.S., M.S., M.L., M.Ed., M.Pharm., M.Arch., M.F.A., M.M., M.D., M.Drama., M.Com., M.B.A., M.Tech., M.E., M.M.S., M.S., M.L., M.Ed., M.Pharm., M.Arch., M.F.A., M.M., M.D., M.Drama., Others].sort(), , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Master

- name: childAbove18StudentDoctorateDegree, label: Degree, type: datalist, options: [Ph.D., Others].sort(), , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Doctorate

- name: childAbove18StudentBachelorSpecialization, label: Specialization, type: text, , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Bachelor

- name: childAbove18StudentMasterSpecialization, label: Specialization, type: text, , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Master

- name: childAbove18StudentDoctorateSpecialization, label: Specialization, type: text, , visible: when childAbove18Profession is Student and childAbove18StudentStudyLevel is Doctorate

- name: childAbove18EmployeeHighestEducation, label: Highest Education, type: text, , visible: when childAbove18Profession is Employee

- name: childAbove18EmployeeDesignation, label: Designation, type: datalist, options: [Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, Other].sort(), , visible: when childAbove18Profession is Employee

- name: childAbove18EmployeeOrganizationName, label: Organization Name, type: text, , visible: when childAbove18Profession is Employee

- name: childAbove18EmployeeOrganizationAddress, label: Organization Address, type: text, , visible: when childAbove18Profession is Employee, placeholder: "City, State, Country"

- name: childAbove18SelfEmployedHighestEducation, label: Highest Education, type: text, , visible: when childAbove18Profession is Self Employed

- name: childAbove18SelfEmployedProfession, label: Profession, type: datalist, options: [Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, Other].sort(), , visible: when childAbove18Profession is Self Employed

- name: childAbove18SelfEmployedOrganizationName, label: Organization Name, type: text, , visible: when childAbove18Profession is Self Employed

- name: childAbove18SelfEmployedOrganizationAddress, label: Organization Address, type: text, , visible: when childAbove18Profession is Self Employed, placeholder: "City, State, Country"

- name: childAbove18SelfEmployeedBusinessCard, label: Business Card, type: file, , visible: when childAbove18Profession is Self Employed, accept: many, allow: from files and camera both

- name: childAbove18RetiredEducation, label: Education, type: text, , visible: when childAbove18Profession is Retired

- name: childAbove18RetiredOrganizationName, label: Previous Organization Name, type: text, , visible: when childAbove18Profession is Retired

- name: childAbove18RetiredDesignation, label: Previous Designation, type: text, , visible: when childAbove18Profession is Retired

- name: childAbove18RetiredOrganizationAddress, label: Previous Organization Address, type: text, , visible: when childAbove18Profession is Retired, placeholder: "City, State, Country"

- name: childAbove18ExtraQualificationAndMastery, label: Extra Qualification and Mastery, type: textarea, 

- name: childAbove18ExtraNotes, label: Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here", 

- name: childAbove18MaritalStatus, label: Marital Status, type: select, options: [Single, Married - Within Samaj, Married - Outside Samaj, Widow - Within Samaj, Widow - Outside Samaj, Divorced - Within Samaj, Divorced - Outside Samaj], 

- name: childAbove18SpouseName, label: Spouse Name, type: text, , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseDob, label: Spouse's Date of Birth, type: date, , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseGender, label: Spouse's Gender, type: select, options: [Male, Female], , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseMobileNumber, label: Spouse's Mobile Number, type: phone, , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseBloodGroup, label: Spouse's Blood Group, type: select, options: [A+, A-, B+, B-, AB+, AB-, O+, O-, Others], , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseHighestEducation, label: Spouse's Highest Education, type: text, , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseProfession, label: Spouse's Profession, type: select, options: [Employee, Self Employed, Retired, Other], , visible: when childAbove18MaritalStatus is not Single

- name: childAbove18SpouseEmployeeDesignation, label: Spouse's Designation, type: text, placeholder: "Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, Other", , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Employee

- name: childAbove18SpouseEmployeeOrganizationName, label: Spouse's Organization Name, type: text, , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Employee

- name: childAbove18SpouseEmployeeOrganizationAddress, label: Spouse's Organization Address, type: text, , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Employee, placeholder: "City, State, Country"

- name: childAbove18SpouseSelfEmployedProfession, label: Spouse's Profession, type: select, options: [Software Engineer, C.A., Doctor, Lawyer, Accountant, Teacher, Other], , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Self Employed

- name: childAbove18SpouseSelfEmployedOrganizationName, label: Spouse's Organization Name, type: text, , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Self Employed

- name: childAbove18SpouseSelfEmployedOrganizationAddress, label: Spouse's Organization Address, type: text, , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Self Employed, placeholder: "City, State, Country"

- name: childAbove18SpouseSelfEmployedBusinessCard, label: Spouse's Business Card, type: file, , visible: when childAbove18MaritalStatus is not Single and childAbove18SpouseProfession is Self Employed, accept: many, allow: from files and camera both

## Section : Ujani 

- name: ujaniFood, label: Food Rating, type: select, options: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

- name: ujaniFoodComment, label: Food Comment, type: textarea, 

- name: ujaniHygiene, label: Hygiene Rating, type: select, options: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

- name: ujaniHygieneComment, label: Hygiene Comment, type: textarea, 

- name: ujaniManagement, label: Management Rating, type: select, options: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

- name: ujaniManagementComment, label: Management Comment, type: textarea, 

- name: ujaniEvents, label: Events Rating, type: select, options: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

- name: ujaniEventsComment, label: Events Comment, type: textarea, 

- name: ujaniAttendedRegularly, label: Attended Regularly, type: select, options: [Yes, No], 

- name: ujaniNotAttendedReason, label: Not Attended Reason, type: textarea, , visible: when ujaniAttendedRegularly is No

- name: ujaniExtraNotes, label: Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here", 

## Section : Ujani - Future Ideas

- name: suggestionForUjani, label: Suggestion for Ujani, type: textarea, 

## Section : Support

- name: eventsFutureIdeas, label: Events Future Ideas, type: textarea, 

- name: eventsWillingToParticipate, label: Willing to Participate, type: select, options: [Yes, No], 

- name: eventsWillingToSupport, label: Willing to Support, type: select, options: [Yes, No], 

- name: eventsSupportingMethod, label: If yes, how? (Select all that apply), type: checkbox, group: eventsSupportingMethod, options: ['Sharing Contacts', 'Physical Support (Setup, Event Management, etc.)', 'Marketing & Publicity', 'Communication & Coordination', 'Hosting or Hospitality', 'Monetary Contribution', 'Others'], visible: when eventsWillingToSupport is Yes

- name: eventsSupportingMethodOther, label: Please specify support method if not above, type: textarea, visible: when eventsSupportingMethod contains Others

- name: wadiShouldBeCreated, label: Wadi Should Be Created, type: select, options: [Yes, No], 

- name: wadiExtraNotes, label: Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here", 

## Section: Extras

- name: extrasExtraNotes, label: Extra Notes, type: textarea, placeholder: "If some other information is required, please mention it here", 

## Section: Surveyed By

- name: surveyedBy, label: Surveyed By, type: text

# Instructions

1. The sections are to be traversed back and forth with the help of Back and Next Button and the last section will have Submit instead of Next, the form should have a shadcn like feel.
2. There will be stages of deliverables which will be in the following order
    1. Give just the frontend first, but make it so that we can accomodate backend later. Also in this version instead of uploading data to any server, just downnloaded the form data into a json file.