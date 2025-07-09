import { FieldSchema } from "./type";

export const childAbove18Schema : FieldSchema[] = [
    {
        name: 'childAbove18Name',
        label: 'Full Name',
        placeholder: "Child's Full Name",
        type: 'text',
        required: true,
    },
    {
        name: 'childAbove18Dob',
        label: 'Date of Birth',
        type: 'date',
        required: true,
    },
    {
        name: 'childAbove18Gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female'],
        required: true,
    },
    {
        name: 'childAbove18Address',
        label: 'Address',
        placeholder: "City, State, Country",
        type: 'text',
        required: true,
    },
    {
        name: 'childAbove18Profession',
        label: 'Profession',
        type: 'checkbox',
        options: ['Student', 'Employee', 'Self Employed', 'Retired', 'Other'],
        required: true,
    },
    {
        name: 'childAbove18StudentStudyLevel',
        label: 'Level of Study',
        type: 'radio',
        options: ['School', 'Diploma', 'Bachelor', 'Master', 'Doctorate'],
        required: true,
        visible: (values) => values.childAbove18Profession === 'Student'
    },
    {
        name: 'childAbove18StudentSchoolStandard',
        label: 'School Standard',
        type: 'select',
        options: ['9', '10', '11', '12'],
        required: true,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'School'
    },
    {
        name: 'childAbove18StudentDiplomaYear',
        label: 'Year of Diploma',
        type: 'select',
        options: ['1', '2', '3', '4'],
        required: true,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Diploma'
    },
    {
        name: 'childAbove18StudentBachelorDegree',
        label: 'Degree',
        type: 'datalist',
        options: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.Tech.', 'B.E.', 'B.M.S.', 'B.S.', 'B.L.', 'B.Ed.', 'B.Pharm.', 'B.Arch.', 'B.F.A.', 'B.M.', 'B.D.', 'B.Drama.', 'B.Com.', 'B.B.A.', 'B.Tech.', 'B.E.', 'B.M.S.', 'B.S.', 'B.L.', 'B.Ed.', 'B.Pharm.', 'B.Arch.', 'B.F.A.', 'B.M.', 'B.D.', 'B.Drama.', 'Others'].sort(),
        required: true,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Bachelor'
    },
    {
        name: 'childAbove18StudentMasterDegree',
        label: 'Degree',
        type: 'datalist',
        options: ['M.A.', 'M.Sc.', 'M.Com.', 'M.B.A.', 'M.Tech.', 'M.E.', 'M.M.S.', 'M.S.', 'M.L.', 'M.Ed.', 'M.Pharm.', 'M.Arch.', 'M.F.A.', 'M.M.', 'M.D.', 'M.Drama.', 'M.Com.', 'M.B.A.', 'M.Tech.', 'M.E.', 'M.M.S.', 'M.S.', 'M.L.', 'M.Ed.', 'M.Pharm.', 'M.Arch.', 'M.F.A.', 'M.M.', 'M.D.', 'M.Drama.', 'Others'].sort(),
        required: true,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Master'
    },
    {
        name: 'childAbove18StudentDoctorateDegree',
        label: 'Degree',
        type: 'datalist',
        options: ['Ph.D.', 'Others'].sort(),
        required: true,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Doctorate'
    },
    {
        name: 'childAbove18StudentBachelorSpecialization',
        label: 'Specialization',
        type: 'text',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Bachelor'
    },
    {
        name: 'childAbove18StudentMasterSpecialization',
        label: 'Specialization',
        type: 'text',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Master'
    },
    {
        name: 'childAbove18StudentDoctorateSpecialization',
        label: 'Specialization',
        type: 'text',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Student' && values.childAbove18StudentStudyLevel === 'Doctorate'
    },
    {
        name: 'childAbove18EmployeeDesignation',
        label: 'Designation',
        type: 'datalist',
        required: true,
        options: ['Software Engineer', 'C.A.', 'Doctor', 'Lawyer', 'Accountant', 'Teacher', 'Other'],
        visible: (values) => values.childAbove18Profession === 'Employee'
    },
    {
        name: 'childAbove18EmployeeOrganizationName',
        label: 'Organization Name',
        type: 'text',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Employee'
    },
    {
        name: 'childAbove18SelfEmployedProfession',
        label: 'Profession',
        type: 'datalist',
        options: ['Software Engineer', 'C.A.', 'Doctor', 'Lawyer', 'Accountant', 'Teacher', 'Other'],
        required: true,
        visible: (values) => values.childAbove18Profession === 'Self Employed'
    },
    {
        name: 'childAbove18SelfEmployedOrganizationName',
        label: 'Organization Name',
        type: 'text',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Self Employed'
    },
    {
        name: 'childAbove18SelfEmployedOrganizationAddress',
        label: 'Organization Address',
        type: 'textarea',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Self Employed'
    },
    {
        name: 'childAbove18SelfEmployeedBusinessCard',
        label: 'Business Card',
        type: 'file',
        required: false,
        visible: (values) => values.childAbove18Profession === 'Self Employed'
    },
]