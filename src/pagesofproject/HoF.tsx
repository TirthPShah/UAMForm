"use client"

import { FieldErrors, UseFormRegister, UseFormWatch, UseFormSetValue } from "react-hook-form";
import { UAMFormData } from "@/app/types/type";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BloodGroupType, CountryType, MaritalStatusType, MembershipType, ProfessionType } from "@/app/options";
import { countries } from "@/app/options";

interface HoFPageProps {
    register: UseFormRegister<UAMFormData>;
    errors: FieldErrors<UAMFormData>;
    watch: UseFormWatch<UAMFormData>;
    onNext: () => void;
    setValue: UseFormSetValue<UAMFormData>;
}

export default function HoFPageDetails ({register, errors, watch, onNext, setValue} : HoFPageProps) {

    const bloodGroup = watch("headOfFamilyBloodGroup")
    const professionType = watch("headOfFamilyProfession")

    return (
        
        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Step 1 : Head Of Family Details</h2>

            {/* Name */}

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyName">Name</Label>
                <Input
                    id="headOfFamilyName"
                    placeholder="Enter full Name"
                    {...register("headOfFamilyName")}
                />

                {errors.headOfFamilyName && (
                    <p className="text-red-500 text-sm">
                        {errors.headOfFamilyName.message}
                    </p>
                )}

            </div>

            {/* Membership Number */}

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyMembershipNumber">Membership Number</Label>
                <Input
                    id="headOfFamilyMembershipNumber"
                    placeholder="Enter membership number"
                    {...register("headOfFamilyMembershipNumber")}
                />

                {errors.headOfFamilyMembershipNumber && (
                    <p className="text-red-500 text-sm">
                    {errors.headOfFamilyMembershipNumber.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label>Membership Type</Label>
                <Select
                onValueChange={(val) =>
                    setValue("headOfFamilyMembershipType", val as MembershipType)
                }
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Lifetime">Lifetime</SelectItem>
                        <SelectItem value="Regular">Regular</SelectItem>
                    </SelectContent>
                </Select>

                {errors.headOfFamilyMembershipType && (
                    <p className="text-red-500 text-sm">
                    {errors.headOfFamilyMembershipType.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyDateOfBirth">Date of Birth</Label>
                <Input
                id="headOfFamilyDateOfBirth"
                type="date"
                {...register("headOfFamilyDateOfBirth")}
                />

                {errors.headOfFamilyDateOfBirth && (
                    <p className="text-red-500 text-sm">
                        {errors.headOfFamilyDateOfBirth.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label>Gender</Label>
                <Select
                    onValueChange={(val) =>
                    setValue("headOfFamilyGender", val as "Male" | "Female")
                    }
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                </Select>

                {errors.headOfFamilyGender && (
                    <p className="text-red-500 text-sm">{errors.headOfFamilyGender.message}</p>
                )}
                
            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyEmail">Email</Label>
                <Input
                id="headOfFamilyEmail"
                type="email"
                placeholder="Enter email"
                {...register("headOfFamilyEmail")}
                />

                {errors.headOfFamilyEmail && (
                    <p className="text-red-500 text-sm">
                        {errors.headOfFamilyEmail.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyMobile">Mobile</Label>
                <Input
                id="headOfFamilyMobile"
                type="tel"
                placeholder="Enter mobile number"
                {...register("headOfFamilyMobile")}
                />

                {errors.headOfFamilyMobile && (
                    <p className="text-red-500 text-sm">{errors.headOfFamilyMobile.message}</p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilySecondaryMobile">Secondary Mobile</Label>
                <Input
                id="headOfFamilySecondaryMobile"
                type="tel"
                placeholder="Enter secondary mobile number (optional)"
                {...register("headOfFamilySecondaryMobile")}
                />

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyMaritalStatus">Marital Status</Label>

                <Select
                    onValueChange={(val) => {
                        setValue("headOfFamilyMaritalStatus", val as MaritalStatusType)
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Marital Status"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Married - Within Samaj">Married - Within Samaj</SelectItem>
                        <SelectItem value="Married - Outside Samaj">Married - Outside Samaj</SelectItem>
                        <SelectItem value="Widow(er) - Within Samaj">Widow(er) - Within Samaj</SelectItem>
                        <SelectItem value="Widow(er) - Outside Samaj">Widow(er) - Outside Samaj</SelectItem>
                        <SelectItem value="Divorced - Within Samaj">Divorced - Within Samaj</SelectItem>
                        <SelectItem value="Divorced - Outside Samaj">Divorced - Outside Samaj</SelectItem>
                    </SelectContent>

                </Select>
            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyAddress">Address</Label>
                <Input
                id="headOfFamilyAddress"
                placeholder="Enter address"
                {...register("headOfFamilyAddress")}
                />

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyPinCode">Pin Code</Label>
                <Input
                id="headOfFamilyPinCode"
                placeholder="Enter pin code"
                {...register("headOfFamilyPinCode")}
                />

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyCity">City</Label>
                <Input
                id="headOfFamilyCity"
                placeholder="Enter city"
                {...register("headOfFamilyCity")}
                />

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyState">State</Label>
                <Input
                id="headOfFamilyState"
                placeholder="Enter state"
                {...register("headOfFamilyState")}
                />

            </div>

            <div className="space-y-2">

                <Label>Country</Label>
                <Select
                onValueChange={(val) =>
                    setValue("headOfFamilyCountry", val as CountryType)
                }
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                    </SelectTrigger>

                    <SelectContent>
                        {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                                {country}
                            </SelectItem>
                        ))}
                    </SelectContent>

                </Select>

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyEducation">Education</Label>
                <Input
                    id="headOfFamilyEducation"
                    placeholder="B.Tech, M.B.A, ..."
                    {...register("headOfFamilyEducation")}
                />

                {errors.headOfFamilyEducation && (
                    <p className="text-red-500 text-sm">
                        {errors.headOfFamilyEducation.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">
            
                <Label htmlFor="headOfFamilyProfession">Profession</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("headOfFamilyProfession", val as ProfessionType)
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Profession"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Employee">Employee</SelectItem>
                        <SelectItem value="Self Employed (Business)">Self Employed (Business)</SelectItem>
                        <SelectItem value="Retired">Retired</SelectItem>
                        <SelectItem value="Home Maker (House Wife)">Home Maker (House Wife)</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>

                </Select>

            </div>

            {professionType === "Employee" && (

                <>
                
                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyDesignation">Designation</Label>
                        <Input
                            id="headOfFamilyDesignation"
                            placeholder="Accountant, Architect, Engineer, Doctor, ..."
                            {...register("headOfFamilyDesignation")}
                            />

                        {errors.headOfFamilyDesignation && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyDesignation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyOrganisation">Organisation</Label>
                        <Input
                            id="headOfFamilyOrganisation"
                            placeholder="KPMG, Zydus, HSBC, ..."
                            {...register("headOfFamilyOrganisation")}
                        />

                        {errors.headOfFamilyOrganisation && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyOrganisation.message}
                            </p>
                        )}

                    </div>

                </>

            )}

            {professionType === "Self Employed (Business)" && (

                <>
                
                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyDesignation">Designation</Label>
                        <Input
                            id="headOfFamilyDesignation"
                            placeholder="CEO, CTO, CFO, ..."
                            {...register("headOfFamilyDesignation")}
                            />

                        {errors.headOfFamilyDesignation && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyDesignation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyOrganisation">Organisation</Label>
                        <Input
                            id="headOfFamilyOrganisation"
                            placeholder="Name of Business"
                            {...register("headOfFamilyOrganisation")}
                        />

                        {errors.headOfFamilyOrganisation && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyOrganisation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyBusinessAddress">Address</Label>
                        <Textarea
                            id="headOfFamilyBusinessAddress"
                            placeholder="Business Address"
                            {...register("headOfFamilyBusinessAddress")}
                        />

                        {errors.headOfFamilyBusinessAddress && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyBusinessAddress.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyBusinessDocs">Business Documents</Label>
                        <Input
                            id="headOfFamilyBusinessDocs"
                            type="file"
                            multiple
                            onChange={(e) => {
                                setValue("headOfFamilyBusinessDocs", e.target.files ?? null)
                            }}
                        />

                        {errors.headOfFamilyBusinessDocs && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyBusinessDocs.message}
                            </p>
                        )}

                    </div>

                </>

            )}

            {professionType === "Retired" && (

                <>
                
                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyDesignation">Previous Designation</Label>
                        <Input
                            id="headOfFamilyDesignation"
                            placeholder="Accountant, Architect, Engineer, Doctor, ..."
                            {...register("headOfFamilyDesignation")}
                            />

                        {errors.headOfFamilyDesignation && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyDesignation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="headOfFamilyOrganisation">Previous Organisation</Label>
                        <Input
                            id="headOfFamilyOrganisation"
                            placeholder="KPMG, Zydus, HSBC, ..."
                            {...register("headOfFamilyOrganisation")}
                        />

                        {errors.headOfFamilyOrganisation && (
                            <p className="text-red-500 text-sm">
                                {errors.headOfFamilyOrganisation.message}
                            </p>
                        )}

                    </div>

                </>

            )}
            
            <div className="space-y-2">

                <Label htmlFor="headOfFamilyPhoto">Photo</Label>
                <Input
                id="headOfFamilyPhoto"
                type="file"
                accept="image/*"
                onChange={(e) => setValue("headOfFamilyPhoto", e.target.files?.[0] || null)}
                />

                {errors.headOfFamilyPhoto && (
                <p className="text-red-500 text-sm">{errors.headOfFamilyPhoto.message}</p>
                )}
                
            </div>

            <div className="space-y-2">

                <Label>Blood Group</Label>
                <Select
                onValueChange={(val) =>
                    setValue("headOfFamilyBloodGroup", val as BloodGroupType)
                }
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>

                </Select>

                {errors.headOfFamilyBloodGroup && (
                <p className="text-red-500 text-sm">{errors.headOfFamilyBloodGroup.message}</p>
                )}

            </div>

            {bloodGroup === 'Others' && (
                <div className="space-y-2">
                    <Label htmlFor="headOfFamilyBloodGroupOthers">Blood Group (Others): </Label>
                    <Input
                    id="headOfFamilyBloodGroupOthers"
                    placeholder="Other Blood Group"
                    {...register("headOfFamilyBloodGroupOthers")}
                    />

                </div>
            )}

            <div className="space-y-2">

                <Label>Is Blood Donor</Label>
                <Select
                onValueChange={(val) => {
                    setValue("headOfFamilyIsBloodDonor", val as "Yes" | "No")
                }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Is Blood Donor"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                    </SelectContent>

                </Select>
                
                {errors.headOfFamilyIsBloodDonor && (
                    <p className="text-red-500 text-sm">{errors.headOfFamilyIsBloodDonor.message}</p>
                )}


            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyHobbies">Hobbies</Label>
                <Input
                    id="headOfFamilyHobbies"
                    placeholder="Cricket, Chess, ..."
                    {...register("headOfFamilyHobbies")}
                />

                {errors.headOfFamilyHobbies && (
                    <p className="text-red-500 text-sm">
                        {errors.headOfFamilyHobbies.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="headOfFamilyExtraNotes">Extra Notes</Label>
                <Textarea
                id="headOfFamilyExtraNotes"
                placeholder="Any extra notes"
                {...register("headOfFamilyExtraNotes")}
                />

            </div>

            <div className="flex justify-end pt-4">
                <Button type="button" onClick={onNext}>
                    Next
                </Button>
            </div>
        </div>
    );
}