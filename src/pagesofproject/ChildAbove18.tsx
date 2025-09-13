"use client";

import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch, Control, useFieldArray } from "react-hook-form";
import { FormData } from "@/app/types/type";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { countries, CountryType, MaritalStatusType, ProfessionType } from "@/app/options";
import { ChildAbove18DefaultData } from "@/app/types/childAbove18";

interface ChildAbove18PageProps {
    register: UseFormRegister<FormData>;
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>;
    onBack: () => void;
    onNext: () => void;
    setValue: UseFormSetValue<FormData>;
}

export default function ChildAbove18Page({ register, control, errors, watch, onBack, onNext, setValue }: ChildAbove18PageProps) {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "childrenAbove18"
    });

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Step 4 : Children Above 18 Details</h2>

            {fields.map((field, index) => {

                return (

                    <div key={field.id} className="space-y-4">

                        <h3 className="font-medium">Child {index + 1}</h3>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18Name`}>Name</Label>
                            <Input 
                                id={`childrenAbove18.${index}.childAbove18Name`} 
                                {...register(`childrenAbove18.${index}.childAbove18Name`)} 
                            />

                            {errors.childrenAbove18?.[index]?.childAbove18Name && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Name?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18DateOfBirth`}>Date of Birth</Label>
                            <Input 
                                type="date"
                                id={`childrenAbove18.${index}.childAbove18DateOfBirth`} 
                                {...register(`childrenAbove18.${index}.childAbove18DateOfBirth`)} 
                            />

                            {errors.childrenAbove18?.[index]?.childAbove18DateOfBirth && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18DateOfBirth?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18Gender`}>Gender</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18Gender`, value as "Male" | "Female")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18Gender && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Gender?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18MobileNumber`}>Mobile Number</Label>
                            <Input 
                                type="tel"
                                id={`childrenAbove18.${index}.childAbove18MobileNumber`} 
                                {...register(`childrenAbove18.${index}.childAbove18MobileNumber`)} 
                            />

                            {errors.childrenAbove18?.[index]?.childAbove18MobileNumber && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18MobileNumber?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18IsMember`}>Is Member</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18IsMember`, value as "Yes" | "No")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18IsMember && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18IsMember?.message}</p>
                            )}

                        </div>

                        {watch(`childrenAbove18.${index}.childAbove18IsMember`) === "Yes" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18MembershipNumber`}>Membership Number</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18MembershipNumber`} 
                                    {...register(`childrenAbove18.${index}.childAbove18MembershipNumber`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18MembershipNumber && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18MembershipNumber?.message}</p>
                                )}

                            </div>

                        )}

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18BloddGroup`}>Blood Group</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18BloddGroup`, value as "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Blood Group" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A+">A+</SelectItem>
                                    <SelectItem value="A-">A-</SelectItem>
                                    <SelectItem value="B+">B+</SelectItem>
                                    <SelectItem value="B-">B-</SelectItem>
                                    <SelectItem value="AB+">AB+</SelectItem>
                                    <SelectItem value="AB-">AB-</SelectItem>
                                    <SelectItem value="O+">O+</SelectItem>
                                    <SelectItem value="O-">O-</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18BloddGroup && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18BloddGroup?.message}</p>
                            )}

                        </div>

                        {watch(`childrenAbove18.${index}.childAbove18BloddGroup`) === "Others" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18BloodGroupOthers`}>Please Specify Other Blood Group</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18BloodGroupOthers`} 
                                    {...register(`childrenAbove18.${index}.childAbove18BloodGroupOthers`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18BloodGroupOthers && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18BloodGroupOthers?.message}</p>
                                )}

                            </div>

                        )}

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18IsBloodDonor`}>Is Blood Donor</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18IsBloodDonor`, value as "Yes" | "No")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18IsBloodDonor && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18IsBloodDonor?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18AddressSameAsParents`}>Is Address Same As Parents</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18AddressSameAsParents`, value as "Yes" | "No")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18AddressSameAsParents && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18AddressSameAsParents?.message}</p>
                            )}

                        </div>

                        {watch(`childrenAbove18.${index}.childAbove18AddressSameAsParents`) === "No" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Address`}>Address</Label>
                                <Textarea 
                                    id={`childrenAbove18.${index}.childAbove18Address`} 
                                    {...register(`childrenAbove18.${index}.childAbove18Address`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18Address && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Address?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18AddressSameAsParents`) === "No" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18City`}>City</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18City`} 
                                    {...register(`childrenAbove18.${index}.childAbove18City`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18City && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18City?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18AddressSameAsParents`) === "No" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18State`}>State</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18State`} 
                                    {...register(`childrenAbove18.${index}.childAbove18State`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18State && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18State?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18AddressSameAsParents`) === "No" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Country`}>Country</Label>
                                <Select
                                    onValueChange={(val) => {
                                        setValue(`childrenAbove18.${index}.childAbove18Country`, val as CountryType);
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Country" />
                                    </SelectTrigger>
                                    
                                    <SelectContent>
                                        {countries.map((country) => (
                                            <SelectItem key={country} value={country}>
                                                {country}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {errors.childrenAbove18?.[index]?.childAbove18Country && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Country?.message}</p>
                                )}

                            </div>
    
                        )}

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18Education`}>Education</Label>
                            <Input 
                                id={`childrenAbove18.${index}.childAbove18Education`} 
                                {...register(`childrenAbove18.${index}.childAbove18Education`)}
                                placeholder="Highest Qualification - B.Com., B.Tech., MBA, PhD, etc." 
                            />

                            {errors.childrenAbove18?.[index]?.childAbove18Education && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Education?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18Profession`}>Profession</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18Profession`, value as ProfessionType)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Profession" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Student">Student</SelectItem>
                                    <SelectItem value="Employee">Employee</SelectItem>
                                    <SelectItem value="Self Employed (Business)">Self Employed (Business)</SelectItem>
                                    <SelectItem value="Retired">Retired</SelectItem>
                                    <SelectItem value="Home Maker (House Wife)">Home Maker (House Wife)</SelectItem>
                                    <SelectItem value="Others">Others</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18Profession && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Profession?.message}</p>
                            )}

                        </div>

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18StudyLevel`}>Place of Study</Label>
                                <Select
                                    onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18StudyLevel`, value as "School" | "Diploma / Degree (Bachelors, Master, PHD)")}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Place of Study" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="School">School</SelectItem>
                                        <SelectItem value="Diploma / Degree (Bachelors, Master, PHD)">Diploma / Degree (Bachelors, Master, PHD)</SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.childrenAbove18?.[index]?.childAbove18StudyLevel && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18StudyLevel?.message}</p>
                                )}  

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Student" && watch(`childrenAbove18.${index}.childAbove18StudyLevel`) === "School" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Grade`}>Grade</Label>
                                <Select
                                    onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18Grade`, value as "9" | "10" | "11" | "12")}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Grade" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="9">9</SelectItem>
                                        <SelectItem value="10">10</SelectItem>
                                        <SelectItem value="11">11</SelectItem>
                                        <SelectItem value="12">12</SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.childrenAbove18?.[index]?.childAbove18Grade && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Grade?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Student" && watch(`childrenAbove18.${index}.childAbove18StudyLevel`) === "School" && (watch(`childrenAbove18.${index}.childAbove18Grade`) == "11" || watch(`childrenAbove18.${index}.childAbove18Grade`) == "12") && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Stream`}>Stream</Label>
                                <Select
                                    onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18Stream`, value as "Commerce" | "Science" | "Arts")}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Stream" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="Commerce">Commerce</SelectItem>
                                        <SelectItem value="Science">Science</SelectItem>
                                        <SelectItem value="Arts">Arts</SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.childrenAbove18?.[index]?.childAbove18Stream && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Stream?.message}</p>
                                )}

                            </div>

                        )}
                        
                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Student" && watch(`childrenAbove18.${index}.childAbove18StudyLevel`) === "Diploma / Degree (Bachelors, Master, PHD)" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Degree`}>Degree</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18Degree`} 
                                    {...register(`childrenAbove18.${index}.childAbove18Degree`)} 
                                    placeholder="Diploma, B.Tech., B.Com., BBA, MBA, M.Tech., PhD, etc..."
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18Degree && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Degree?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Student" && watch(`childrenAbove18.${index}.childAbove18StudyLevel`) === "Diploma / Degree (Bachelors, Master, PHD)" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Specialization`}>Specialization / Mastery</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18Specialization`} 
                                    {...register(`childrenAbove18.${index}.childAbove18Specialization`)} 
                                    placeholder="Finance, Marketing, Computer Science, Mechanical, Civil, etc..."
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18Specialization && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Specialization?.message}</p>
                                )}

                            </div>

                        )}

                        {(watch(`childrenAbove18.${index}.childAbove18Profession`) === "Student" && watch(`childrenAbove18.${index}.childAbove18StudyLevel`) === "Diploma / Degree (Bachelors, Master, PHD)") && (
                            <div className="space-y-2">
                                <Label htmlFor={`childrenAbove18.${index}.childAbove18StudyInstituteName`}>Institute Name</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18StudyInstituteName`} 
                                    {...register(`childrenAbove18.${index}.childAbove18StudyInstituteName`)} 
                                    placeholder="Institute Name"
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18StudyInstituteName && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18StudyInstituteName?.message}</p>
                                )}
                            </div>
                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) !== "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Designation`}>Designation</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18Designation`} 
                                    {...register(`childrenAbove18.${index}.childAbove18Designation`)} 
                                    placeholder="Job Title / Position"
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18Designation && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Designation?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) !== "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18Organisation`}>Organisation</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18Organisation`} 
                                    {...register(`childrenAbove18.${index}.childAbove18Organisation`)} 
                                    placeholder="Company / Business / Institute Name"
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18Organisation && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Organisation?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Self Employed (Business)" && (

                            <div className="space-y-2">
                                
                                <Label htmlFor={`childrenAbove18.${index}.childAbove18BusinessAddress`}>Business Address</Label>
                                <Textarea 
                                    id={`childrenAbove18.${index}.childAbove18BusinessAddress`} 
                                    {...register(`childrenAbove18.${index}.childAbove18BusinessAddress`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18BusinessAddress && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18BusinessAddress?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18Profession`) === "Self Employed (Business)" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18BusinessDocs`}>Business Registration Docs (if any)</Label>
                                <Input 
                                    type="file"
                                    id={`childrenAbove18.${index}.childAbove18BusinessDocs`} 
                                    {...register(`childrenAbove18.${index}.childAbove18BusinessDocs`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18BusinessDocs && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18BusinessDocs?.message}</p>
                                )}

                            </div>

                        )}

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18Hobbies`}>Hobbies / Qualification / Mastery</Label>
                            <Input 
                                id={`childrenAbove18.${index}.childAbove18Hobbies`} 
                                {...register(`childrenAbove18.${index}.childAbove18Hobbies`)} 
                                placeholder="Hobbies, Skills, Qualification, Mastery, etc."
                            />

                            {errors.childrenAbove18?.[index]?.childAbove18Hobbies && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18Hobbies?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18MaritalStatus`}>Marital Status</Label>
                            <Select
                                onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18MaritalStatus`, value as MaritalStatusType)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Marital Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Single">Single</SelectItem>
                                    <SelectItem value="Married - Within Samaj">Married - Within Samaj</SelectItem>
                                    <SelectItem value="Married - Outside Samaj">Married - Outside Samaj</SelectItem>
                                    <SelectItem value="Divorced - Within Samaj">Divorced - Within Samaj</SelectItem>
                                    <SelectItem value="Divorced - Outside Samaj">Divorced - Outside Samaj</SelectItem>
                                    <SelectItem value="Widow(er) - Within Samaj">Widow(er) - Within Samaj</SelectItem>
                                    <SelectItem value="Widow(er) - Outside Samaj">Widow(er) - Outside Samaj</SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.childrenAbove18?.[index]?.childAbove18MaritalStatus && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18MaritalStatus?.message}</p>
                            )}

                        </div>

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseName`}>Spouse Name</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseName`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseName`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseName && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseName?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseDateOfBirth`}>Spouse Date of Birth</Label>
                                <Input 
                                    type="date"
                                    id={`childrenAbove18.${index}.childAbove18SpouseDateOfBirth`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseDateOfBirth`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseDateOfBirth && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseDateOfBirth?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseAge`}>Spouse Age</Label>
                                <Input 
                                    type="number"
                                    id={`childrenAbove18.${index}.childAbove18SpouseAge`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseAge`, { valueAsNumber: true })} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseAge && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseAge?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseMobileNumber`}>Spouse Mobile Number</Label>
                                <Input 
                                    type="tel"
                                    id={`childrenAbove18.${index}.childAbove18SpouseMobileNumber`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseMobileNumber`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseMobileNumber && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseMobileNumber?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseBloodGroup`}>Spouse Blood Group</Label>
                                <Select
                                    onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18SpouseBloodGroup`, value as "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-" | "Others")}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Blood Group" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A+">A+</SelectItem>
                                        <SelectItem value="A-">A-</SelectItem>
                                        <SelectItem value="B+">B+</SelectItem>
                                        <SelectItem value="B-">B-</SelectItem>
                                        <SelectItem value="AB+">AB+</SelectItem>
                                        <SelectItem value="AB-">AB-</SelectItem>
                                        <SelectItem value="O+">O+</SelectItem>
                                        <SelectItem value="O-">O-</SelectItem>
                                        <SelectItem value="Others">Other</SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseBloodGroup && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseBloodGroup?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseBloodGroup`) === "Others" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseBloodGroupOthers`}>Please Specify Other Blood Group</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseBloodGroupOthers`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseBloodGroupOthers`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseBloodGroupOthers && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseBloodGroupOthers?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseEducation`}>Spouse Education</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseEducation`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseEducation`)} 
                                    placeholder="Highest Qualification - B.Com., B.Tech., MBA, PhD, etc." 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseEducation && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseEducation?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseProfession`}>Spouse Profession</Label>
                                <Select
                                    onValueChange={(value) => setValue(`childrenAbove18.${index}.childAbove18SpouseProfession`, value as ProfessionType)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Profession" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Student">Student</SelectItem>
                                        <SelectItem value="Employee">Employee</SelectItem>
                                        <SelectItem value="Self Employed (Business)">Self Employed (Business)</SelectItem>
                                        <SelectItem value="Retired">Retired</SelectItem>
                                        <SelectItem value="Home Maker (House Wife)">Home Maker (House Wife)</SelectItem>
                                        <SelectItem value="Others">Others</SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseProfession && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseProfession?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseProfession`) === "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseDegree`}>Spouse Degree</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseDegree`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseDegree`)} 
                                    placeholder="Diploma, B.Tech., B.Com., BBA, MBA, M.Tech., PhD, etc..."
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseDegree && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseDegree?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseProfession`) === "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseSpecialization`}>Spouse Specialization / Mastery</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseSpecialization`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseSpecialization`)} 
                                    placeholder="Finance, Marketing, Computer Science, Mechanical, Civil, etc..."
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseSpecialization && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseSpecialization?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseProfession`) !== "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseDesignation`}>Spouse Designation</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseDesignation`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseDesignation`)} 
                                    placeholder="Job Title / Position"
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseDesignation && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseDesignation?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseProfession`) !== "Student" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseOrganisation`}>Spouse Organisation</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseOrganisation`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseOrganisation`)} 
                                    placeholder="Company / Business / Institute Name"
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseOrganisation && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseOrganisation?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseProfession`) === "Self Employed (Business)" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseBusinessAddress`}>Spouse Business Address</Label>
                                <Textarea 
                                    id={`childrenAbove18.${index}.childAbove18SpouseBusinessAddress`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseBusinessAddress`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseBusinessAddress && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseBusinessAddress?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && watch(`childrenAbove18.${index}.childAbove18SpouseProfession`) === "Self Employed (Business)" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseBusinessDocs`}>Spouse Business Registration Docs (if any)</Label>
                                <Input 
                                    type="file"
                                    id={`childrenAbove18.${index}.childAbove18SpouseBusinessDocs`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseBusinessDocs`)} 
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseBusinessDocs && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseBusinessDocs?.message}</p>
                                )}

                            </div>

                        )}

                        {watch(`childrenAbove18.${index}.childAbove18MaritalStatus`) !== "Single" && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenAbove18.${index}.childAbove18SpouseHobbies`}>Spouse Hobbies / Qualification / Mastery</Label>
                                <Input 
                                    id={`childrenAbove18.${index}.childAbove18SpouseHobbies`} 
                                    {...register(`childrenAbove18.${index}.childAbove18SpouseHobbies`)} 
                                    placeholder="Hobbies, Skills, Qualification, Mastery, etc."
                                />

                                {errors.childrenAbove18?.[index]?.childAbove18SpouseHobbies && (
                                    <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18SpouseHobbies?.message}</p>
                                )}

                            </div>

                        )}

                        <div className="space-y-2">

                            <Label htmlFor={`childrenAbove18.${index}.childAbove18ExtraNotes`}>Any Other Information</Label>
                            <Textarea 
                                id={`childrenAbove18.${index}.childAbove18ExtraNotes`} 
                                {...register(`childrenAbove18.${index}.childAbove18ExtraNotes`)} 
                            />

                            {errors.childrenAbove18?.[index]?.childAbove18ExtraNotes && (
                                <p className="text-sm text-red-600">{errors.childrenAbove18[index]?.childAbove18ExtraNotes?.message}</p>
                            )}

                        </div>

                        <div className="space-y-2 flex justify-end">
                            <Button type="button" variant="outline" onClick={() => remove(index)}>Remove</Button>
                        </div>

                    </div>

                )


            })}

            <div className="flex items-center justify-between">

                <Button type="button" onClick={onBack}>Back</Button>
                <Button type="button" onClick={() => append(ChildAbove18DefaultData)}>Add Child</Button>
                <Button type="button" onClick={onNext}>Next</Button>

            </div>

        </div>

    )
}