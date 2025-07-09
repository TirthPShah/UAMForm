import { FieldSchema } from "./type";

export const childUnder18Schema : FieldSchema[] = [
    {
        name: 'childu18Name',
        label: 'Full Name',
        placeholder: "Child's Full Name",
        type: 'text',
        required: true,
    },
    {
        name: 'childu18Dob',
        label: 'Date of Birth',
        type: 'date',
        required: true,
    },
    {
        name: 'childu18Gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female'],
        required: true,
    },
    {
        name: 'childu18PlaceOfStudy',
        label: 'Place of Study',
        type: 'radio',
        options: ['School', 'Diploma', 'Too small to study'],
        required: true,
    },
    {
        name: 'childu18SchoolClass',
        label: 'Class/Grade/Standard',
        type: 'select',
        options: ['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        required: true,
    },
    {
        name: 'childu18DiplomaYear',
        label: 'Year of Diploma',
        type: 'select',
        options: ['1', '2', '3', '4'],
        required: false,
    },
    {
        name: 'childu18DiplomaSpec',
        label: 'Diploma Specialization',
        type: 'text',
        required: false,
    },
    {
        name: 'childu18MobileNumber',
        label: 'Mobile Number',
        type: 'text',
        required: false,
    },
    {
        name: 'childu18Hobbies',
        label: 'Hobbies',
        type: 'textarea',
        required: false,
    },
    {
        name: 'childu18Interests',
        label: 'Expertise',
        type: 'textarea',
        required: false,
    },
    {
        name: 'childu18ExtraNotes',
        label: 'Extra Notes',
        type: 'textarea',
        placeholder: "If some other information is required, please mention it here",
        required: false,
    },
];