// @/app/page.tsx (formerly /membership, now root form)
"use client";

import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useFieldArray, Controller } from 'react-hook-form';
import { MembershipFormData } from '@/lib/schemas';
import { submitMembershipForm } from '@/app/actions/membership';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  CalendarIcon,
  PlusCircle,
  Trash2,
  User,
  Users,
  Briefcase,
  CheckCircle,
  MessageSquareQuote,
  Lightbulb,
  ShieldQuestion,
  HeartHandshake,
  Building2,
  UserCircle,
  Smile,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Exo_2 } from 'next/font/google';
import { DayPicker } from 'react-day-picker';

const steps = [
  {
    id: 1,
    title: 'Personal & Membership',
    icon: UserCircle,
    fields: [
      'hofName',
      'membershipNumber',
      'membershipType',
      'hofDob',
      'hofGender',
      'hofMaritalStatus',
      'hofEmail',
      'hofMobile',
      'hofAddressStreet',
      'hofAddressCity',
      'hofAddressState',
      'hofAddressPostalCode',
      'hofAddressCountry'
    ]
  },
  {
    id: 2,
    title: 'Professional Info',
    icon: Briefcase,
    fields: [
      'hofDesignation',
      'hofProfession',
      'hofProfessionOrgName',
      'hofProfessionOrgAddress'
    ]
  },
  {
    id: 3,
    title: 'Spouse Details',
    icon: Users,
    fields: [
      'spouseName',
      'spouseDob',
      'spouseGender',
      'spouseDesignation',
      'spouseProfession',
      'spouseProfessionOrgName',
      'spouseProfessionOrgAddress'
    ]
  },
  {
    id: 4,
    title: 'Children Under 18',
    icon: Smile,
    fields: ['childrenUnder18']
  },
  {
    id: 5,
    title: 'Children Over 18',
    icon: GraduationCap,
    fields: ['childrenOver18']
  },
  {
    id: 6,
    title: 'Ujani - Past Experience',
    icon: MessageSquareQuote,
    fields: [
      'ujaniPastOverallExperience',
      'ujaniPastLastTwoYears',
      'ujaniAttendRegularly',
      'ujaniReasonIfNotAttending'
    ]
  },
  {
    id: 7,
    title: 'Ujani - Future Ideas',
    icon: Lightbulb,
    fields: [
      'ujaniFutureSuggestions',
      'ujaniSamajExpectations'
    ]
  },
  {
    id: 8,
    title: 'Samaj - Challenges & Togetherness',
    icon: ShieldQuestion,
    fields: [
      'samajFacingChallenges',
      'samajChallengesDescription',
      'samajIncreaseTogethernessIdeas'
    ]
  },
  {
    id: 9,
    title: 'Samaj - Future & Support',
    icon: HeartHandshake,
    fields: [
      'samajFutureEventsIdeas',
      'samajWillingToParticipateEvents',
      'samajWadiConstructionThoughts',
      'samajWillingToSupportEvents',
      'samajSupportMethods',
      'samajOtherSupportMethod'
    ]
  },
  {
    id: 10,
    title: 'Review & Submit',
    icon: CheckCircle,
    fields: []
  }
];

// all country options
const countryOptions = [	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"]
const genderOptions = ["Male", "Female", "Other"];
const maritalStatusOptions = ["Single", "Married - Outside Samaj", "Married - Within Samaj", "Divorced - Outside Samaj", "Divorced - Within Samaj", "Widowed - Outside Samaj", "Widowed - Within Samaj", "Other"];
const membershipTypeOptions = ["Lifetime", "Regular"];
const yesNoOptions = ["Yes", "No"];
const supportMethodsOptions = [
  { id: "contacts", label: "Sharing contacts" },
  { id: "physical", label: "Physical support (setup/teardown)" },
  { id: "marketing", label: "Marketing & publicity" },
  { id: "communication", label: "Communication & coordination" },
  { id: "hosting", label: "Hosting or hospitality" },
  { id: "logistics", label: "Logistics & transportation" },
  { id: "monetary", label: "Monetary contribution" },
  { id: "other", label: "Other (specify below)" }
];

const isValidDate = (d: any): d is Date => d instanceof Date && !isNaN(d.getTime());

// Update the DateInput component with proper type handling
const DateInput = ({ value, onChange, disabled }: { value: Date | undefined, onChange: (date: Date) => void, disabled?: boolean }) => {
  const formatDateForInput = (date: Date | undefined) => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return '';
    }
    return format(date, 'yyyy-MM-dd');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    if (!isNaN(date.getTime())) {
      onChange(date);
    }
  };

  return (
    <Input
      type="date"
      value={formatDateForInput(value)}
      onChange={handleChange}
      disabled={disabled}
      className="bg-background"
      max={format(new Date(), 'yyyy-MM-dd')}
      min="1900-01-01"
    />
  );
};

export default function ComprehensiveFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  const methods = useForm<MembershipFormData>({
    mode: 'onTouched',
    defaultValues: {
      hofName: '',
      membershipNumber: '',
      membershipType: 'Lifetime',
      hofDob: undefined,
      hofGender: 'Male',
      hofMaritalStatus: 'Married - Within Samaj',
      hofEmail: '',
      hofMobile: '',
      hofAddressStreet: '',
      hofAddressCity: '',
      hofAddressState: '',
      hofAddressPostalCode: '',
      hofAddressCountry: 'India',
      hofDesignation: '',
      hofProfession: '',
      hofProfessionOrgName: '',
      hofProfessionOrgAddress: '',
      spouseName: '',
      spouseDob: undefined,
      spouseGender: 'Male',
      spouseDesignation: '',
      spouseProfession: '',
      spouseProfessionOrgName: '',
      spouseProfessionOrgAddress: '',
      childrenUnder18: [],
      childrenOver18: [],
      ujaniPastOverallExperience: '',
      ujaniPastLastTwoYears: '',
      ujaniAttendRegularly: 'Yes',
      ujaniReasonIfNotAttending: '',
      ujaniFutureSuggestions: '',
      ujaniSamajExpectations: '',
      samajFacingChallenges: 'No',
      samajChallengesDescription: '',
      samajIncreaseTogethernessIdeas: '',
      samajFutureEventsIdeas: '',
      samajWillingToParticipateEvents: 'Yes',
      samajWadiConstructionThoughts: '',
      samajWillingToSupportEvents: 'Yes',
      samajSupportMethods: [],
      samajOtherSupportMethod: ''
    }
  });

  const {
    control,
    handleSubmit,
    watch,
    trigger,
    setError,
    reset,
    formState: { errors }
  } = methods;

  const hofMaritalStatus = watch('hofMaritalStatus');
  const ujaniAttendRegularly = watch('ujaniAttendRegularly');
  const samajFacingChallenges = watch('samajFacingChallenges');
  const samajWillingToSupportEvents = watch('samajWillingToSupportEvents');
  const samajSupportMethods: string[] | undefined = watch('samajSupportMethods');

  const {
    fields: childrenUnder18Fields,
    append: appendChildUnder18,
    remove: removeChildUnder18
  } = useFieldArray({
    control,
    name: "childrenUnder18"
  });

  const {
    fields: childrenOver18Fields,
    append: appendChildOver18,
    remove: removeChildOver18
  } = useFieldArray({
    control,
    name: "childrenOver18"
  });

  const processSubmit = async (data: any) => {
    setIsLoading(true);
    console.log("Submitting form data:", data);
    const result = await submitMembershipForm(data);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
        variant: "default"
      });
      reset();
      setCurrentStep(0);
    } else {
      toast({
        title: "Error",
        description: result.message || "An unknown error occurred.",
        variant: "destructive"
      });
      if (result.errors) {
        result.errors.forEach((error: { path: string[]; message: string }) => {
          setError(error.path.join('.') as any, {
            type: 'server',
            message: error.message
          });
        });
      }
    }
  };

  const nextStep = async () => {
    let fieldsToValidate = steps[currentStep].fields;
    
    // Conditional validation for Spouse step
    if (currentStep === 2 && !(hofMaritalStatus?.includes("Married") || hofMaritalStatus?.includes("Divorced") || hofMaritalStatus?.includes("Widowed"))) {
      fieldsToValidate = fieldsToValidate.filter(f => !f.startsWith('spouse'));
    }

    // Conditional validation for Children steps
    const showChildrenSteps = hofMaritalStatus?.includes("Married") || 
      hofMaritalStatus?.includes("Divorced") || 
      hofMaritalStatus?.includes("Widowed");

    if ((currentStep === 3 || currentStep === 4) && !showChildrenSteps) {
      fieldsToValidate = []; // Skip validation if not applicable
    }

    // Conditional validation for Ujani reason
    if (currentStep === 5 && ujaniAttendRegularly === "No") {
      // fieldsToValidate should already include ujaniReasonIfNotAttending
    } else if (currentStep === 5 && ujaniAttendRegularly !== "No") {
      fieldsToValidate = fieldsToValidate.filter(
        f => f !== 'ujaniReasonIfNotAttending'
      );
    }

    // Conditional validation for Samaj challenges description
    if (currentStep === 7 && samajFacingChallenges === "Yes") {
      // fieldsToValidate should already include samajChallengesDescription
    } else if (currentStep === 7 && samajFacingChallenges !== "Yes") {
      fieldsToValidate = fieldsToValidate.filter(
        f => f !== 'samajChallengesDescription'
      );
    }

    // Conditional validation for Other support method
    if (
      currentStep === 8 &&
      samajWillingToSupportEvents === "Yes" &&
      samajSupportMethods?.includes("Other")
    ) {
      // fieldsToValidate should already include samajOtherSupportMethod
    } else if (
      currentStep === 8 &&
      !(samajWillingToSupportEvents === "Yes" && samajSupportMethods?.includes("Other"))
    ) {
      fieldsToValidate = fieldsToValidate.filter(
        f => f !== 'samajOtherSupportMethod'
      );
    }

    const isValid = fieldsToValidate.length > 0
      ? await trigger(fieldsToValidate as any)
      : true;

    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    } else {
      console.log("Validation errors:", errors);
      toast({
        title: "Validation Error",
        description: "Please correct the errors on this page.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  if (!clientLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-background">
        <p>Loading form...</p>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Personal & Membership
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <FormField control={control} name="hofName" render={({ field }) => ( <FormItem> <FormLabel>Full Name*</FormLabel> <FormControl><Input placeholder="Head of Family Full Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
              <FormField control={control} name="membershipNumber" render={({ field }) => ( <FormItem> <FormLabel>Membership Number (if any)</FormLabel> <FormControl><Input placeholder="Existing Membership No." {...field} /></FormControl> <FormMessage /> </FormItem>)} />
              <FormField control={control} name="membershipType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Membership Type*</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background">
                      {membershipTypeOptions.map(t => (
                        <SelectItem key={t} value={t} className="bg-background hover:bg-muted">
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                control={control}
                name="hofDob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth*</FormLabel>
                    <FormControl>
                      <DateInput
                        value={field.value}
                        onChange={field.onChange}
                        disabled={false}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={control} name="hofGender" render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender*</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background">
                      {genderOptions.map(g => (
                        <SelectItem key={g} value={g} className="bg-background hover:bg-muted">
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={control} name="hofMaritalStatus" render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status*</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select marital status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background">
                      {maritalStatusOptions.map(s => (
                        <SelectItem key={s} value={s} className="bg-background hover:bg-muted">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={control} name="hofEmail" render={({ field }) => ( <FormItem> <FormLabel>Email*</FormLabel> <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
              <FormField control={control} name="hofMobile" render={({ field }) => ( <FormItem> <FormLabel>Mobile Number*</FormLabel> <FormControl><Input type="tel" placeholder="9876543210" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            </div>
            <h3 className="text-lg font-medium text-foreground border-b pb-2 pt-4">Address*</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <FormField control={control} name="hofAddressStreet" render={({ field }) => ( <FormItem> <FormLabel>Street Address*</FormLabel> <FormControl><Input placeholder="Street Address" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name="hofAddressCity" render={({ field }) => ( <FormItem> <FormLabel>City*</FormLabel> <FormControl><Input placeholder="City" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name="hofAddressState" render={({ field }) => ( <FormItem> <FormLabel>State*</FormLabel> <FormControl><Input placeholder="State" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name="hofAddressPostalCode" render={({ field }) => ( <FormItem> <FormLabel>Postal Code*</FormLabel> <FormControl><Input placeholder="Postal Code" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name="hofAddressCountry" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country*</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {countryOptions.map(c => (
                          <SelectItem key={c} value={c} className="bg-background hover:bg-muted">
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
          </div>
        );
      case 1: // Professional Info
        return (
          <div className="space-y-6">
            <FormField control={control} name="hofDesignation" render={({ field }) => ( <FormItem> <FormLabel>Designation*</FormLabel> <FormControl><Input placeholder="Your designation/title" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="hofProfession" render={({ field }) => ( <FormItem> <FormLabel>Profession / Occupation*</FormLabel> <FormControl><Input placeholder="Profession" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="hofProfessionOrgName" render={({ field }) => ( <FormItem> <FormLabel>Organisation Name</FormLabel> <FormControl><Input placeholder="Organisation Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="hofProfessionOrgAddress" render={({ field }) => ( <FormItem> <FormLabel>Profession Address</FormLabel> <FormControl><Textarea placeholder="Full address of workplace" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
          </div>
        );
      case 2: // Spouse Details
        if (!(hofMaritalStatus?.includes("Married") || hofMaritalStatus?.includes("Divorced") || hofMaritalStatus?.includes("Widowed"))) {
          return <p className="text-muted-foreground p-4 text-center">Spouse details are only applicable if marital status is Married, Divorced, or Widowed. Click Next.</p>;
        }
        return (
          <div className="space-y-6">
            <FormField control={control} name="spouseName" render={({ field }) => ( <FormItem> <FormLabel>Spouse's Full Name*</FormLabel> <FormControl><Input placeholder="Spouse's Full Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField
              control={control}
              name="spouseDob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Spouse's Date of Birth*</FormLabel>
                  <FormControl>
                    <DateInput
                      value={field.value}
                      onChange={field.onChange}
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={control} name="spouseGender" render={({ field }) => (
              <FormItem>
                <FormLabel>Spouse's Gender*</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background">
                    {genderOptions.map(g => (
                      <SelectItem key={g} value={g} className="bg-background hover:bg-muted">
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={control} name="spouseDesignation" render={({ field }) => ( <FormItem> <FormLabel>Spouse's Designation*</FormLabel> <FormControl><Input placeholder="Spouse's designation/title" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="spouseProfession" render={({ field }) => ( <FormItem> <FormLabel>Spouse's Profession / Occupation*</FormLabel> <FormControl><Input placeholder="Profession" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="spouseProfessionOrgName" render={({ field }) => ( <FormItem> <FormLabel>Spouse's Organisation Name</FormLabel> <FormControl><Input placeholder="Organisation Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="spouseProfessionOrgAddress" render={({ field }) => ( <FormItem> <FormLabel>Spouse's Profession Address</FormLabel> <FormControl><Textarea placeholder="Full address of workplace" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
          </div>
        );
      case 3: // Children Under 18
        if (!(hofMaritalStatus?.includes("Married") || hofMaritalStatus?.includes("Divorced") || hofMaritalStatus?.includes("Widowed"))) {
          return <p className="text-muted-foreground p-4 text-center">Children details applicable if marital status is Married, Divorced, or Widowed. Click Next.</p>;
        }
        return (
          <div className="space-y-6">
            {childrenUnder18Fields.map((item, index) => (
              <Card key={item.id} className="p-4 space-y-4 relative bg-background shadow-md">
                <div className="flex justify-between items-center"><FormLabel className="text-md font-semibold text-primary">Child {index + 1} (Under 18)</FormLabel><Button type="button" variant="ghost" size="sm" onClick={() => removeChildUnder18(index)} className="text-destructive hover:text-destructive-foreground hover:bg-destructive"><Trash2 className="h-4 w-4" /></Button></div>
                <FormField control={control} name={`childrenUnder18.${index}.name`} render={({ field }) => ( <FormItem> <FormLabel>Full Name*</FormLabel> <FormControl><Input placeholder="Child's Full Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField
                  control={control}
                  name={`childrenUnder18.${index}.dob`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth*</FormLabel>
                      <FormControl>
                        <DateInput
                          value={field.value}
                          onChange={field.onChange}
                          disabled={false}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={control} name={`childrenUnder18.${index}.gender`} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender*</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {genderOptions.map(g => (
                          <SelectItem key={g} value={g} className="bg-background hover:bg-muted">
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={control} name={`childrenUnder18.${index}.school`} render={({ field }) => ( <FormItem> <FormLabel>School/College Name</FormLabel> <FormControl><Input placeholder="School/College Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenUnder18.${index}.grade`} render={({ field }) => ( <FormItem> <FormLabel>Class/Grade</FormLabel> <FormControl><Input placeholder="Class/Grade" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenUnder18.${index}.mobile`} render={({ field }) => ( <FormItem> <FormLabel>Mobile Number</FormLabel> <FormControl><Input type="tel" placeholder="Mobile Number" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenUnder18.${index}.appInstalled`} render={({ field }) => (<FormItem className="space-y-3"> <FormLabel>App Installed?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} value={field.value} className="flex space-x-2">{yesNoOptions.map(o => (<FormItem key={o} className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value={o} /></FormControl><FormLabel className="font-normal">{o}</FormLabel></FormItem>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
              </Card>
            ))}
            <Button type="button" variant="outline" onClick={() => appendChildUnder18({ name: '', dob: undefined, gender: 'Male', school: '', grade: '', mobile: '', appInstalled: undefined })}><PlusCircle className="h-4 w-4 mr-2" /> Add Child (Under 18)</Button>
            {childrenUnder18Fields.length === 0 && <p className="text-muted-foreground text-center p-4">No children under 18 added yet.</p>}
          </div>
        );
      case 4: // Children Over 18
        if (!(hofMaritalStatus?.includes("Married") || hofMaritalStatus?.includes("Divorced") || hofMaritalStatus?.includes("Widowed"))) {
          return <p className="text-muted-foreground p-4 text-center">Children details applicable if marital status is Married, Divorced, or Widowed. Click Next.</p>;
        }
        return (
          <div className="space-y-6">
            {childrenOver18Fields.map((item, index) => (
              <Card key={item.id} className="p-4 space-y-4 relative bg-background shadow-md">
                <div className="flex justify-between items-center"><FormLabel className="text-md font-semibold text-primary">Child {index + 1} (Over 18)</FormLabel><Button type="button" variant="ghost" size="sm" onClick={() => removeChildOver18(index)} className="text-destructive hover:text-destructive-foreground hover:bg-destructive"><Trash2 className="h-4 w-4" /></Button></div>
                <FormField control={control} name={`childrenOver18.${index}.name`} render={({ field }) => ( <FormItem> <FormLabel>Full Name*</FormLabel> <FormControl><Input placeholder="Child's Full Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField
                  control={control}
                  name={`childrenOver18.${index}.dob`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth*</FormLabel>
                      <FormControl>
                        <DateInput
                          value={field.value}
                          onChange={field.onChange}
                          disabled={false}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={control} name={`childrenOver18.${index}.gender`} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender*</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {genderOptions.map(g => (
                          <SelectItem key={g} value={g} className="bg-background hover:bg-muted">
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={control} name={`childrenOver18.${index}.designation`} render={({ field }) => ( <FormItem> <FormLabel>Designation*</FormLabel> <FormControl><Input placeholder="Designation/title" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenOver18.${index}.profession`} render={({ field }) => ( <FormItem> <FormLabel>Profession (e.g., Education, Engineering)</FormLabel> <FormControl><Input placeholder="Profession" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenOver18.${index}.professionOrgName`} render={({ field }) => ( <FormItem> <FormLabel>Organisation/Institution Name</FormLabel> <FormControl><Input placeholder="Organisation Name" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenOver18.${index}.professionOrgAddress`} render={({ field }) => ( <FormItem> <FormLabel>Profession Address</FormLabel> <FormControl><Textarea placeholder="Address of workplace/institution" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenOver18.${index}.maritalStatus`} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marital Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select marital status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {maritalStatusOptions.map(s => (
                          <SelectItem key={s} value={s} className="bg-background hover:bg-muted">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={control} name={`childrenOver18.${index}.mobile`} render={({ field }) => ( <FormItem> <FormLabel>Mobile</FormLabel> <FormControl><Input type="tel" placeholder="Mobile Number" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                <FormField control={control} name={`childrenOver18.${index}.email`} render={({ field }) => ( <FormItem> <FormLabel>Email</FormLabel> <FormControl><Input type="email" placeholder="Email Address" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
              </Card>
            ))}
            <Button type="button" variant="outline" onClick={() => appendChildOver18({ 
              name: '', 
              dob: undefined, 
              gender: 'Male', 
              designation: '', 
              profession: '', 
              professionOrgName: '', 
              professionOrgAddress: '', 
              maritalStatus: undefined, 
              mobile: '', 
              email: '' 
            })}><PlusCircle className="h-4 w-4 mr-2" /> Add Child (Over 18)</Button>
            {childrenOver18Fields.length === 0 && <p className="text-muted-foreground text-center p-4">No children over 18 added yet.</p>}
          </div>
        );
      case 5: // Ujani Past Experience
        return (
          <div className="space-y-6">
            <FormField control={control} name="ujaniPastOverallExperience" render={({ field }) => ( <FormItem> <FormLabel>Please share your overall experience with previous Ujani celebrations.</FormLabel> <FormControl><Textarea placeholder="Your overall experience..." {...field} rows={3} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="ujaniPastLastTwoYears" render={({ field }) => ( <FormItem> <FormLabel>How has your experience been with Ujani in the last 2 years?</FormLabel> <FormControl><Textarea placeholder="Experience in the last 2 years..." {...field} rows={3} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="ujaniAttendRegularly" render={({ field }) => (<FormItem className="space-y-3"> <FormLabel>Do you attend Ujani regularly each year?*</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} value={field.value} className="flex space-x-2">{yesNoOptions.map(o => (<FormItem key={o} className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value={o} /></FormControl><FormLabel className="font-normal">{o}</FormLabel></FormItem>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
            {ujaniAttendRegularly === "No" && <FormField control={control} name="ujaniReasonIfNotAttending" render={({ field }) => ( <FormItem> <FormLabel>If no, why not?*</FormLabel> <FormControl><Textarea placeholder="Reason for not attending..." {...field} rows={3} /></FormControl> <FormMessage /> </FormItem>)} />}
          </div>
        );
      case 6: // Ujani Future Ideas
        return (
          <div className="space-y-6">
            <FormField control={control} name="ujaniFutureSuggestions" render={({ field }) => ( <FormItem> <FormLabel>Suggestions for future Ujani celebrations.</FormLabel> <FormControl><Textarea placeholder="Your suggestions..." {...field} rows={4} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="ujaniSamajExpectations" render={({ field }) => ( <FormItem> <FormLabel>Expectations from the Samaj during Ujani.</FormLabel> <FormControl><Textarea placeholder="Your expectations..." {...field} rows={4} /></FormControl> <FormMessage /> </FormItem>)} />
          </div>
        );
      case 7: // Samaj Challenges & Togetherness
        return (
          <div className="space-y-6">
            <FormField control={control} name="samajFacingChallenges" render={({ field }) => (<FormItem className="space-y-3"> <FormLabel>Are you facing any challenges within the Samaj?*</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} value={field.value} className="flex space-x-2">{yesNoOptions.map(o => (<FormItem key={o} className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value={o} /></FormControl><FormLabel className="font-normal">{o}</FormLabel></FormItem>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
            {samajFacingChallenges === "Yes" && <FormField control={control} name="samajChallengesDescription" render={({ field }) => ( <FormItem> <FormLabel>If yes, describe briefly.*</FormLabel> <FormControl><Textarea placeholder="Describe challenges..." {...field} rows={3} /></FormControl> <FormMessage /> </FormItem>)} />}
            <FormField control={control} name="samajIncreaseTogethernessIdeas" render={({ field }) => ( <FormItem> <FormLabel>How can we increase togetherness in the Samaj?</FormLabel> <FormControl><Textarea placeholder="Your ideas for togetherness..." {...field} rows={4} /></FormControl> <FormMessage /> </FormItem>)} />
          </div>
        );
      case 8: // Samaj Future & Support
        return (
          <div className="space-y-6">
            <FormField control={control} name="samajFutureEventsIdeas" render={({ field }) => ( <FormItem> <FormLabel>Ideas for future events or programs.</FormLabel> <FormControl><Textarea placeholder="Event/program ideas..." {...field} rows={3} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="samajWillingToParticipateEvents" render={({ field }) => (<FormItem className="space-y-3"> <FormLabel>Are you willing to participate in these events?*</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} value={field.value} className="flex space-x-2">{yesNoOptions.map(o => (<FormItem key={o} className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value={o} /></FormControl><FormLabel className="font-normal">{o}</FormLabel></FormItem>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
            <FormField control={control} name="samajWadiConstructionThoughts" render={({ field }) => ( <FormItem> <FormLabel>Your thoughts on constructing a "Wadi" (community space) for the Samaj.</FormLabel> <FormControl><Textarea placeholder="Thoughts on Wadi..." {...field} rows={3} /></FormControl> <FormMessage /> </FormItem>)} />
            <FormField control={control} name="samajWillingToSupportEvents" render={({ field }) => (<FormItem className="space-y-3"> <FormLabel>Would you be willing to support Samaj events?*</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} value={field.value} className="flex space-x-2">{yesNoOptions.map(o => (<FormItem key={o} className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value={o} /></FormControl><FormLabel className="font-normal">{o}</FormLabel></FormItem>))}</RadioGroup></FormControl><FormMessage /></FormItem>)} />
            {samajWillingToSupportEvents === "Yes" && (
              <>
                <FormField
                  control={control}
                  name="samajSupportMethods"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">If yes, how?*</FormLabel>
                        <FormDescription>Select all that apply.</FormDescription>
                      </div>
                      <div className="space-y-2">
                        {supportMethodsOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={control}
                            name="samajSupportMethods"
                            render={({ field }) => (
                              <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.label)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), option.label])
                                        : field.onChange(
                                            (field.value || []).filter(
                                              (value: string) => value !== option.label
                                            )
                                          );
                                    }}
                                    className="bg-background"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={control} 
                  name="samajOtherSupportMethod" 
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Please specify other support method*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Specify other ways you can support" 
                          {...field} 
                          className="bg-background"
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
        );
      case 9: // Review & Submit
        const formData = watch();
        const formatDateForReview = (dateValue: any) => isValidDate(dateValue) ? format(dateValue, "dd/MM/yyyy") : 'N/A';
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Review Your Information</h3>
            <Card className="bg-background p-6 shadow-sm max-h-[60vh] overflow-y-auto">
              <CardContent className="space-y-3 text-sm">
                <div className="font-medium text-primary">Personal & Membership</div>
                <div><strong>Name:</strong> {formData.hofName}</div>
                <div><strong>Membership No:</strong> {formData.membershipNumber || 'N/A'}</div>
                <div><strong>Membership Type:</strong> {formData.membershipType}</div>
                <div><strong>DOB:</strong> {formatDateForReview(formData.hofDob)}</div>
                <div><strong>Gender:</strong> {formData.hofGender}</div>
                <div><strong>Email:</strong> {formData.hofEmail}</div>
                <div><strong>Mobile:</strong> {formData.hofMobile}</div>
                <div><strong>Address:</strong> {`${formData.hofAddressStreet}, ${formData.hofAddressCity}, ${formData.hofAddressState} - ${formData.hofAddressPostalCode}, ${formData.hofAddressCountry}`}</div>

                <div className="font-medium text-primary pt-3 mt-3 border-t">Professional Info</div>
                <div><strong>Profession:</strong> {formData.hofProfession}</div>
                <div><strong>Org Name:</strong> {formData.hofProfessionOrgName || 'N/A'}</div>
                <div><strong>Org Address:</strong> {formData.hofProfessionOrgAddress || 'N/A'}</div>
                <div><strong>Marital Status:</strong> {formData.hofMaritalStatus}</div>

                {formData.hofMaritalStatus && (formData.hofMaritalStatus.includes("Married") || formData.hofMaritalStatus.includes("Divorced") || formData.hofMaritalStatus.includes("Widowed")) && formData.spouseName && (
                  <>
                    <div className="font-medium text-primary pt-3 mt-3 border-t">Spouse Details</div>
                    <div><strong>Name:</strong> {formData.spouseName}</div>
                    <div><strong>DOB:</strong> {formatDateForReview(formData.spouseDob)}</div>
                    <div><strong>Gender:</strong> {formData.spouseGender}</div>
                    <div><strong>Profession:</strong> {formData.spouseProfession}</div>
                    <div><strong>Org Name:</strong> {formData.spouseProfessionOrgName || 'N/A'}</div>
                    <div><strong>Org Address:</strong> {formData.spouseProfessionOrgAddress || 'N/A'}</div>
                  </>
                )}

                {(formData.hofMaritalStatus && (formData.hofMaritalStatus.includes("Married") || formData.hofMaritalStatus.includes("Divorced") || formData.hofMaritalStatus.includes("Widowed"))) && formData.childrenUnder18 && formData.childrenUnder18.length > 0 && (
                  <>
                    <div className="font-medium text-primary pt-3 mt-3 border-t">Children (Under 18)</div>
                    {formData.childrenUnder18.map((child, idx) => (
                      <div key={idx} className="pl-4 border-l-2 border-muted my-2 py-1">
                        <strong>{child.name}</strong> - DOB: {formatDateForReview(child.dob)}, Gender: {child.gender}, School: {child.school || 'N/A'}, Grade: {child.grade || 'N/A'}, Mobile: {child.mobile || 'N/A'}, App: {child.appInstalled || 'N/A'}
                      </div>
                    ))}
                  </>
                )}
                
                {(formData.hofMaritalStatus && (formData.hofMaritalStatus.includes("Married") || formData.hofMaritalStatus.includes("Divorced") || formData.hofMaritalStatus.includes("Widowed"))) && formData.childrenOver18 && formData.childrenOver18.length > 0 && (
                  <>
                    <div className="font-medium text-primary pt-3 mt-3 border-t">Children (Over 18)</div>
                    {formData.childrenOver18.map((child, idx) => (
                      <div key={idx} className="pl-4 border-l-2 border-muted my-2 py-1">
                        <strong>{child.name}</strong> - DOB: {formatDateForReview(child.dob)}, Gender: {child.gender}, Prof: {child.profession || 'N/A'}, Org: {child.professionOrgName || 'N/A'}, Marital: {child.maritalStatus || 'N/A'}
                      </div>
                    ))}
                  </>
                )}

                <div className="font-medium text-primary pt-3 mt-3 border-t">Ujani Feedback (Past)</div>
                <div><strong>Overall Ujani Exp:</strong> {formData.ujaniPastOverallExperience || 'N/A'}</div>
                <div><strong>Last 2 Years Ujani Exp:</strong> {formData.ujaniPastLastTwoYears || 'N/A'}</div>
                <div><strong>Attend Regularly:</strong> {formData.ujaniAttendRegularly || 'N/A'}</div>
                {formData.ujaniAttendRegularly === "No" && <div><strong>Reason If Not:</strong> {formData.ujaniReasonIfNotAttending || 'N/A'}</div>}

                <div className="font-medium text-primary pt-3 mt-3 border-t">Ujani Feedback (Future)</div>
                <div><strong>Future Suggestions:</strong> {formData.ujaniFutureSuggestions || 'N/A'}</div>
                <div><strong>Samaj Expectations:</strong> {formData.ujaniSamajExpectations || 'N/A'}</div>
                
                <div className="font-medium text-primary pt-3 mt-3 border-t">Samaj Challenges & Togetherness</div>
                <div><strong>Facing Challenges:</strong> {formData.samajFacingChallenges || 'N/A'}</div>
                {formData.samajFacingChallenges === "Yes" && <div><strong>Challenge Desc:</strong> {formData.samajChallengesDescription || 'N/A'}</div>}
                <div><strong>Togetherness Ideas:</strong> {formData.samajIncreaseTogethernessIdeas || 'N/A'}</div>

                <div className="font-medium text-primary pt-3 mt-3 border-t">Samaj Future & Support</div>
                <div><strong>Future Event Ideas:</strong> {formData.samajFutureEventsIdeas || 'N/A'}</div>
                <div><strong>Willing to Participate:</strong> {formData.samajWillingToParticipateEvents || 'N/A'}</div>
                <div><strong>Wadi Thoughts:</strong> {formData.samajWadiConstructionThoughts || 'N/A'}</div>
                <div><strong>Willing to Support Events:</strong> {formData.samajWillingToSupportEvents || 'N/A'}</div>
                {formData.samajWillingToSupportEvents === "Yes" && (
                  <>
                  <div><strong>Support Methods:</strong> {(formData.samajSupportMethods || []).join(', ') || 'N/A'}</div>
                  {formData.samajSupportMethods?.includes("Other") && <div><strong>Other Support:</strong> {formData.samajOtherSupportMethod || 'N/A'}</div>}
                  </>
                )}
                
                <p className="text-sm text-muted-foreground pt-4">Please review all details carefully. By submitting, you confirm that all information is accurate.</p>
              </CardContent>
            </Card>
          </div>
        );
      default: return null;
    }
  };

  const CurrentIcon = steps[currentStep]?.icon || UserCircle;

  return (
    <div className="min-h-screen bg-background">
      <FormProvider {...methods}>
        <Card className="w-full max-w-4xl mx-auto shadow-2xl my-8 bg-card">
          <CardHeader className="bg-card pb-4">
            <div className="flex items-center space-x-3 mb-3">
              <CurrentIcon className="w-7 h-7 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl md:text-3xl font-headline">
                {steps[currentStep]?.title || 'Form'}
              </CardTitle>
            </div>
            <CardDescription>
              Step {currentStep + 1} of {steps.length}. Fields marked with * are required.
            </CardDescription>
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </CardHeader>
          <Form {...methods}>
            <form onSubmit={handleSubmit(processSubmit)}>
              <CardContent className="space-y-8 py-8 min-h-[400px] bg-card">
                {renderStepContent()}
              </CardContent>
              <CardFooter className="flex justify-between py-6 border-t bg-muted/50 rounded-b-lg px-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0 || isLoading}
                  className="bg-background"
                >
                  Previous
                </Button>
                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={nextStep} disabled={isLoading} className="bg-primary">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" disabled={isLoading} className="bg-primary">
                    {isLoading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </FormProvider>
    </div>
  );
}
