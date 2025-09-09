"use client";

import { UseFormRegister, UseFormSetValue, UseFormWatch, Control, FieldErrors, useFieldArray } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { defaultChildUnder18Data } from "@/app/types/childUnder18";
import { FormData } from "@/app/types/type";
import { grades, GradeType } from "@/app/options";

interface ChildUnder18Props {
    register: UseFormRegister<FormData>;
    control: Control<FormData>;
    setValue: UseFormSetValue<FormData>;
    watch: UseFormWatch<FormData>;
    errors: FieldErrors<FormData>;
    onNext: () => void;
    onBack: () => void;
}

export default function ChildUnder18 ({register, control, setValue, watch, errors, onNext, onBack} : ChildUnder18Props) {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "childrenUnder18",
    })

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Step 3 : Children Under 18 Details</h2>

            {fields.map((field, index) => {
                
                const placeOfStudy = watch(`childrenUnder18.${index}.childUnder18PlaceOfStudy`);

                return (

                    <div key={field.id} className="space-y-4">

                        <h3 className="font-medium">Child {index + 1} </h3>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenUnder18.${index}.childUnder18Name`}>Name</Label>
                            <Input
                                id={`childrenUnder18.${index}.childUnder18Name`}
                                placeholder="Name"
                                {...register(`childrenUnder18.${index}.childUnder18Name`)}
                                />

                            {errors.childrenUnder18?.[index]?.childUnder18Name && (
                                <p className="text-red-500 text-sm">
                                    {errors.childrenUnder18[index]?.childUnder18Name?.message}
                                </p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenUnder18.${index}.childUnder18DateOfBirth`}>Date of Birth</Label>
                            <Input
                                type="date"
                                id={`childrenUnder18.${index}.childUnder18DateOfBirth`}
                                {...register(`childrenUnder18.${index}.childUnder18DateOfBirth`)}
                                />

                            {errors.childrenUnder18?.[index]?.childUnder18DateOfBirth && (
                                <p className="text-red-500 text-sm">
                                    {errors.childrenUnder18[index]?.childUnder18DateOfBirth?.message}
                                </p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenUnder18.${index}.childUnder18Gender`}>Gender</Label>
                            <Select
                                onValueChange={(val) => {
                                    setValue(`childrenUnder18.${index}.childUnder18Gender`, val as "Male" | "Female")
                                }}
                            >

                                <SelectTrigger>
                                    <SelectValue placeholder="Gender"></SelectValue>
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                </SelectContent>

                            </Select>

                            {errors.childrenUnder18?.[index]?.childUnder18Gender && (
                                <p className="text-red-500 text-sm">
                                    {errors.childrenUnder18[index]?.childUnder18Gender?.message}
                                </p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenUnder18.${index}.childUnder18PlaceOfStudy`}>Study Level</Label>
                            <Select
                                onValueChange={(val) => {
                                    setValue(`childrenUnder18.${index}.childUnder18PlaceOfStudy`, val as "School" | "Diploma" | "Too Small To Study")
                                }}
                                >

                                <SelectTrigger>
                                    <SelectValue placeholder="Place of Study"></SelectValue>
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="School">School</SelectItem>
                                    <SelectItem value="Diploma">Diploma</SelectItem>
                                    <SelectItem value="Too Small To Study">Too Small To Study</SelectItem>
                                </SelectContent>

                            </Select>

                            {errors.childrenUnder18?.[index]?.childUnder18PlaceOfStudy && (
                                <p className="text-red-500 text-sm">
                                    {errors.childrenUnder18[index]?.childUnder18PlaceOfStudy?.message}
                                </p>
                            )}

                        </div>

                        {placeOfStudy === "School" && (
                            
                            <div className="space-y-2">

                                <Label htmlFor={`childrenUnder18.${index}.childUnder18Grade`}>Grade</Label>
                                <Select
                                    onValueChange={(val) => {
                                        setValue(`childrenUnder18.${index}.childUnder18Grade`, val as GradeType)
                                    }}
                                    >

                                    <SelectTrigger>
                                        <SelectValue placeholder="Grade"></SelectValue>
                                    </SelectTrigger>

                                    <SelectContent>
                                        {grades.map((grade) => (
                                            <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                                        ))}
                                    </SelectContent>

                                </Select>

                                {errors.childrenUnder18?.[index]?.childUnder18Grade && (
                                    <p className="text-red-500 text-sm">
                                        {errors.childrenUnder18[index]?.childUnder18Grade?.message}
                                    </p>
                                )}

                            </div>
                        )}

                        {placeOfStudy === "School" && (watch(`childrenUnder18.${index}.childUnder18Grade`) === "11" || watch(`childrenUnder18.${index}.childUnder18Grade`) === "12") && (

                            <div className="space-y-2">

                                <Label htmlFor={`childrenUnder18.${index}.childUnder18Stream`}>Stream</Label>
                                <Select
                                    onValueChange={(val) => {
                                        setValue(`childrenUnder18.${index}.childUnder18Stream`, val as "Commerce" | "Science" | "Arts")
                                    }}
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

                                {errors.childrenUnder18?.[index]?.childUnder18Stream && (
                                    <p className="text-red-500 text-sm">
                                        {errors.childrenUnder18[index]?.childUnder18Stream?.message}
                                    </p>
                                )}

                            </div>
                        )}

                        {placeOfStudy === "Diploma" && (
                            
                            <div className="space-y-2">

                                <Label htmlFor={`childrenUnder18.${index}.childUnder18DiplomaSpecialization`}>Diploma Specialization</Label>
                                <Input
                                    id={`childrenUnder18.${index}.childUnder18DiplomaSpecialization`}
                                    placeholder="IT, Mechanical Engineering, ..."
                                    {...register(`childrenUnder18.${index}.childUnder18DiplomaSpecialization`)}
                                    />

                                {errors.childrenUnder18?.[index]?.childUnder18DiplomaSpecialization && (
                                    <p className="text-red-500 text-sm">
                                        {errors.childrenUnder18[index]?.childUnder18DiplomaSpecialization?.message}
                                    </p>
                                )}

                            </div>
                            
                        )}

                        <div className="space-y-2">

                            <Label htmlFor={`childrenUnder18.${index}.childUnder18MobileNumber`}>Mobile Number</Label>
                            <Input
                                id={`childrenUnder18.${index}.childUnder18MobileNumber`}
                                placeholder="Mobile Number (Optional)"
                                {...register(`childrenUnder18.${index}.childUnder18MobileNumber`)}
                            />

                            {errors.childrenUnder18?.[index]?.childUnder18MobileNumber && (
                                <p className="text-red-500 text-sm">
                                    {errors.childrenUnder18[index]?.childUnder18MobileNumber?.message}
                                </p>
                            )}

                        </div>

                        <div className="space-y-2">

                            <Label htmlFor={`childrenUnder18.${index}.childUnder18Hobbies`}>Hobbies</Label>
                            <Input
                                id={`childrenUnder18.${index}.childUnder18Hobbies`}
                                {...register(`childrenUnder18.${index}.childUnder18Hobbies`)}
                                />

                            {errors.childrenUnder18?.[index]?.childUnder18Hobbies && (
                                <p className="text-red-500 text-sm">
                                    {errors.childrenUnder18[index]?.childUnder18Hobbies?.message}
                                </p>
                            )}

                        </div>

                        <div className="space-y-2 flex justify-end">

                            {fields.length > 0 && (
                                <Button type="button" variant="outline" onClick={() => remove(index)}>
                                    Remove
                                </Button>
                            )}

                        </div>

                    </div>

                )
            })}

            <div className="flex items-center justify-between">

                <Button type="button" onClick={onBack}>
                    Back
                </Button>

                <Button type="button" onClick={() => append(defaultChildUnder18Data)}>
                    Add Child
                </Button>


                <Button type="button" onClick={onNext}>
                    Next
                </Button>

            </div>
        </div>
    )
}