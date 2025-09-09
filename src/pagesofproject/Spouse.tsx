"use client";

import { FieldErrors, UseFormRegister, UseFormWatch, UseFormSetValue } from "react-hook-form";
import { FormData } from "@/app/types/type";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BloodGroupType, ProfessionType } from "@/app/options";

interface SpousePageProps {

    register: UseFormRegister<FormData>;
    setValue: UseFormSetValue<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>;
    onNext: () => void;
    onBack: () => void;

}

export default function SpousePageDetails ({register, setValue, errors, watch, onNext, onBack} : SpousePageProps) {

    const professionType = watch("spouseProfession");
    const bloodGroup = watch("spouseBloodGroup");

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Step 2 : Spouse Details</h2>

            <div className="space-y-2">

                <Label htmlFor="spouseName">Name</Label>
                <Input
                    id="spouseName"
                    placeholder="Spouse's full name"
                    {...register("spouseName")}
                />

                {errors.spouseName && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseName.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="spouseDateOfBirth">Date of Birth</Label>
                <Input
                    id="spouseDateOfBirth"
                    type="date"
                    {...register("spouseDateOfBirth")}
                />

                {errors.spouseDateOfBirth && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseDateOfBirth.message}
                    </p>
                )}
                
            </div>  

            <div className="space-y-2">

                <Label htmlFor="spouseGender">Gender</Label>
                
                <Select
                    onValueChange={(val) => {
                        setValue("spouseGender", val as "Male" | "Female")
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Spouse's Gender"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                </Select>

                {errors.spouseGender && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseGender.message}
                    </p>
                )}
                
            </div>

            <div className="space-y-2">

                <Label htmlFor="spouseMobileNumber">Mobile Number</Label>
                <Input
                    id="spouseMobileNumber"
                    placeholder="Spouse's Mobile Number"
                    {...register("spouseMobileNumber")}
                />

                {errors.spouseMobileNumber && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseMobileNumber.message}
                    </p>
                )}
                
            </div>      

            <div className="space-y-2">

                <Label htmlFor="spouseDateOfBirth">Date of Birth</Label>
                <Input
                    id="spouseDateOfBirth"
                    type="date"
                    {...register("spouseDateOfBirth")}
                />

                {errors.spouseDateOfBirth && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseDateOfBirth.message}
                    </p>
                )}
                
            </div>  

            <div className="space-y-2">
            
                <Label>Blood Group</Label>
                <Select
                onValueChange={(val) =>
                    setValue("spouseBloodGroup", val as BloodGroupType)
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

                {errors.spouseBloodGroup && (
                <p className="text-red-500 text-sm">{errors.spouseBloodGroup.message}</p>
                )}

            </div>

            {bloodGroup === 'Others' && (

                <div className="space-y-2">
                    <Label htmlFor="spouseBloodGroupOthers">Blood Group (Others): </Label>
                    <Input
                    id="spouseBloodGroupOthers"
                    placeholder="Other Blood Group"
                    {...register("spouseBloodGroupOthers")}
                    />

                </div>

            )}

            <div className="space-y-2">

                <Label>Is Blood Donor</Label>
                <Select
                onValueChange={(val) => {
                    setValue("spouseIsBloodDonor", val as "Yes" | "No")
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
                
                {errors.spouseIsBloodDonor && (
                    <p className="text-red-500 text-sm">{errors.spouseIsBloodDonor.message}</p>
                )}


            </div>

            <div className="space-y-2">

                <Label htmlFor="spouseEducation">Education</Label>
                <Input
                    id="spouseEducation"
                    placeholder="Spouse Education"
                    {...register("spouseEducation")}
                />

                {errors.spouseEducation && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseEducation.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="spaceProfession">Profession</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("spouseProfession", val as ProfessionType)
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

                        <Label htmlFor="spouseDesignation">Designation</Label>
                        <Input
                            id="spouseDesignation"
                            placeholder="Accountant, Architect, Engineer, Doctor, ..."
                            {...register("spouseDesignation")}
                            />

                        {errors.spouseDesignation && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseDesignation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="spouseOrganisation">Organisation</Label>
                        <Input
                            id="spouseOrganisation"
                            placeholder="KPMG, Zydus, HSBC, ..."
                            {...register("spouseOrganisation")}
                        />

                        {errors.spouseOrganisation && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseOrganisation.message}
                            </p>
                        )}

                    </div>

                </>

            )}

            {professionType === "Self Employed (Business)" && (

                <>
                
                    <div className="space-y-2">

                        <Label htmlFor="spouseDesignation">Designation</Label>
                        <Input
                            id="spouseDesignation"
                            placeholder="CEO, CTO, CFO, ..."
                            {...register("spouseDesignation")}
                            />

                        {errors.spouseDesignation && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseDesignation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="spouseOrganisation">Organisation</Label>
                        <Input
                            id="spouseOrganisation"
                            placeholder="Name of Business"
                            {...register("spouseOrganisation")}
                        />

                        {errors.spouseOrganisation && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseOrganisation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="spouseBusinessAddress">Address</Label>
                        <Textarea
                            id="spouseBusinessAddress"
                            placeholder="Business Address"
                            {...register("spouseBusinessAddress")}
                        />

                        {errors.spouseBusinessAddress && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseBusinessAddress.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="spouseBusinessDocs">Business Documents</Label>
                        <Input
                            id="spouseBusinessDocs"
                            type="file"
                            multiple
                            onChange={(e) => {
                                setValue("spouseBusinessDocs", e.target.files ?? null)
                            }}
                        />

                        {errors.spouseBusinessDocs && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseBusinessDocs.message}
                            </p>
                        )}

                    </div>

                </>

            )}

            {professionType === "Retired" && (

                <>
                
                    <div className="space-y-2">

                        <Label htmlFor="spouseDesignation">Previous Designation</Label>
                        <Input
                            id="spouseDesignation"
                            placeholder="Accountant, Architect, Engineer, Doctor, ..."
                            {...register("spouseDesignation")}
                            />

                        {errors.spouseDesignation && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseDesignation.message}
                            </p>
                        )}

                    </div>

                    <div className="space-y-2">

                        <Label htmlFor="spouseOrganisation">Previous Organisation</Label>
                        <Input
                            id="spouseOrganisation"
                            placeholder="KPMG, Zydus, HSBC, ..."
                            {...register("spouseOrganisation")}
                        />

                        {errors.spouseOrganisation && (
                            <p className="text-red-500 text-sm">
                                {errors.spouseOrganisation.message}
                            </p>
                        )}

                    </div>

                </>

            )}

            <div className="space-y-2">

                <Label htmlFor="spouseHobbies">Hobbies</Label>
                <Input
                    id="spouseHobbies"
                    placeholder="Hobbies"
                    {...register("spouseHobbies")}
                />

                {errors.spouseHobbies && (
                    <p className="text-red-500 text-sm">
                        {errors.spouseHobbies.message}
                    </p>
                )}
                
            </div>

            <div className="space-y-2">

                <Label htmlFor="spouseExtraNotes">Extra Notes</Label>
                <Textarea
                id="spouseExtraNotes"
                placeholder="Any extra notes"
                {...register("spouseExtraNotes")}
                />

            </div>

            <div className="flex justify-between pt-4">
                <Button type="button" onClick={onBack}>
                    Back
                </Button>

                <Button type="button" onClick={onNext}>
                    Next
                </Button>
            </div>

        </div>
    )
}