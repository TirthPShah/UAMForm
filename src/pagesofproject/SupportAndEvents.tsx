"use client";

import { UseFormRegister, UseFormWatch, UseFormSetValue, FieldErrors, Controller, Control } from "react-hook-form";
import { UAMFormData } from "@/app/types/type";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SupportType } from "@/app/options";

interface SupportAndEventsPageProps {
    register: UseFormRegister<UAMFormData>;
    errors: FieldErrors<UAMFormData>;
    watch: UseFormWatch<UAMFormData>;
    control: Control<UAMFormData>;
    onBack: () => void;
    onNext: () => void;
    setValue: UseFormSetValue<UAMFormData>;
}

const supportOptions : SupportType[] = [
    "Sharing Contacts",
    "Physical Support (Setup, Event Management, etc.",
    "Marketing & Publicity",
    "Communication & Coordination",
    "Hosting",
    "Monetary Contribution",
    "Others",
]

export default function SupportAndEventsPage({register, errors, watch, onBack, onNext, control, setValue } : SupportAndEventsPageProps) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Support And Events</h2>

            <div className="space-y-2">

                <Label htmlFor="supportAndEventsFutureIdeas">Future Event Ideas</Label>
                <Textarea
                    id="supportAndEventsFutureIdeas"
                    placeholder="Future Event Ideas"
                    {...register("supportAndEventsEventsFutureIdeas")}
                />

                {errors.supportAndEventsEventsFutureIdeas && (
                    <p className="text-red-500 text-sm">
                        {errors.supportAndEventsEventsFutureIdeas.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="supportAndEventsWillingToParticipate">Willing to Participate</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("supportAndEventsWillingToParticipate", val as "Yes" | "No");
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Willing to Participate"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                    </SelectContent>

                </Select>

                {errors.supportAndEventsWillingToParticipate && (
                    <p className="text-red-500 text-sm">
                        {errors.supportAndEventsWillingToParticipate.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="supportAndEventsWillingToSupport">Willing To Support</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("supportAndEventsWillingToSupport", val as "Yes" | "No");
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Willing To Support"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                    </SelectContent>

                </Select>

                {errors.supportAndEventsWillingToSupport && (
                    <p className="text-red-500 text-sm">
                        {errors.supportAndEventsWillingToSupport.message}
                    </p>
                )}

            </div>

            {watch("supportAndEventsWillingToSupport") === "Yes" && (
                
                <div className="space-y-2">
                    
                    <Label htmlFor="supportAndEventsWillingSupportTypes">If yes, how? (Select all that Apply)</Label>

                    <Controller
                        name="supportAndEventsWillingSupportTypes"
                        control = {control}
                        defaultValue={[]}
                        render={({ field}) => (
                            <div className="space-y-1">

                                {supportOptions.map((option) => (
                                    <div className="flex items-center space-x-2" key={option}>
                                        <input type="checkbox" id={`supportAndEventsWillingSupportTypes-${option}`} value={option} checked={(field.value || []).includes(option)} 
                                            onChange={(e) => {

                                                const current = field.value || [];
                                                if(e.target.checked) {
                                                    field.onChange([...current, option]);
                                                } else {
                                                    field.onChange(current.filter((val : SupportType) => val !== option));
                                                }
                                            }}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor={`supportAndEventsWillingSupportTypes-${option}`} className="text-sm">
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    />

                    {/* {supportOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={`supportAndEventsWillingSupportTypes-${option}`}
                                value={option}
                                {...register("supportAndEventsWillingSupportTypes")}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={`supportAndEventsWillingSupportTypes-${option}`} className="text-sm">
                                {option}
                            </label>
                        </div>
                    ))} */}

                    {errors.supportAndEventsWillingSupportTypes && (
                        <p className="text-red-500 text-sm">
                            {errors.supportAndEventsWillingSupportTypes.message}
                        </p>
                    )}

                </div>

            )}

            {watch("supportAndEventsWillingSupportTypes")?.includes("Others") && (

                <div className="space-y-2">
                    <Label htmlFor="supportAndEventsWillingToSupportTypeOthers">If Others, Please Specify</Label>
                    <Textarea
                        id="supportAndEventsWillingToSupportTypeOthers"
                        placeholder="Please Specify"
                        {...register("supportAndEventsWillingToSupportTypeOthers")}
                    />

                    {errors.supportAndEventsWillingToSupportTypeOthers && (
                        <p className="text-red-500 text-sm">
                            {errors.supportAndEventsWillingToSupportTypeOthers.message}
                        </p>
                    )}

                </div>
            )}

            <div className="space-y-2">
                <Label htmlFor="supportAndEventsExtraNotes">Extra Notes</Label>
                <Textarea
                    id="supportAndEventsExtraNotes"
                    placeholder="Extra Notes"
                    {...register("supportAndEventsExtraNotes")}
                />

                {errors.supportAndEventsExtraNotes && (
                    <p className="text-red-500 text-sm">
                        {errors.supportAndEventsExtraNotes.message}
                    </p>
                )}
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