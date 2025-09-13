"use client";

import { UseFormRegister, UseFormWatch, UseFormSetValue, FieldErrors } from "react-hook-form";
import { FormData } from "@/app/types/type";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RatingType } from "@/app/options";

interface UjaniPageProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>;
    onBack: () => void;
    onNext: () => void;
    setValue: UseFormSetValue<FormData>;
}

export default function UjaniPage ({register, errors, watch, onBack, onNext, setValue } : UjaniPageProps) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Ujani</h2>

            <div className="flex justify-between flex-wrap">

                <div className="space-y-2">

                    <Label htmlFor="ujaniFoodRating">Food Rating</Label>
                    <Select
                        onValueChange={(val) => {
                            setValue("ujaniFoodRating", val as RatingType);
                        }}
                    >

                        <SelectTrigger>
                            <SelectValue placeholder="Food Rating"></SelectValue>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Average">Average</SelectItem>
                            <SelectItem value="Better">Better</SelectItem>
                            <SelectItem value="Excellent">Excellent</SelectItem>
                        </SelectContent>

                    </Select>

                    {errors.ujaniFoodRating && (
                        <p className="text-red-500 text-sm">
                            {errors.ujaniFoodRating.message}
                        </p>
                    )}

                </div>

                <div className="space-y-2">

                    <Label htmlFor="ujaniHygieneRating">Hygiene Rating</Label>
                    <Select
                        onValueChange={(val) => {
                            setValue("ujaniHygieneRating", val as RatingType);
                        }}
                    >

                        <SelectTrigger>
                            <SelectValue placeholder="Hygiene Rating"></SelectValue>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Average">Average</SelectItem>
                            <SelectItem value="Better">Better</SelectItem>
                            <SelectItem value="Excellent">Excellent</SelectItem>
                        </SelectContent>

                    </Select>

                    {errors.ujaniHygieneRating && (
                        <p className="text-red-500 text-sm">
                            {errors.ujaniHygieneRating.message}
                        </p>
                    )}

                </div>

                <div className="space-y-2">

                    <Label htmlFor="ujaniManagementRating">Mangement Rating</Label>
                    <Select
                        onValueChange={(val) => {
                            setValue("ujaniManagementRating", val as RatingType);
                        }}
                    >

                        <SelectTrigger>
                            <SelectValue placeholder="Management Rating"></SelectValue>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Average">Average</SelectItem>
                            <SelectItem value="Better">Better</SelectItem>
                            <SelectItem value="Excellent">Excellent</SelectItem>
                        </SelectContent>

                    </Select>

                    {errors.ujaniManagementRating && (
                        <p className="text-red-500 text-sm">
                            {errors.ujaniManagementRating.message}
                        </p>
                    )}

                </div>

                <div className="space-y-2">

                    <Label htmlFor="ujaniEventsRating">Events Rating</Label>
                    <Select
                        onValueChange={(val) => {
                            setValue("ujaniEventsRating", val as RatingType);
                        }}
                    >

                        <SelectTrigger>
                            <SelectValue placeholder="Events Rating"></SelectValue>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Average">Average</SelectItem>
                            <SelectItem value="Better">Better</SelectItem>
                            <SelectItem value="Excellent">Excellent</SelectItem>
                        </SelectContent>

                    </Select>

                    {errors.ujaniEventsRating&& (
                        <p className="text-red-500 text-sm">
                            {errors.ujaniEventsRating.message}
                        </p>
                    )}

                </div>
            </div>


            {/* <div className="space-y-2">

                <Label htmlFor="ujaniFoodRating">Food Rating</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("ujaniFoodRating", val as RatingType);
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Food Rating"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Average">Average</SelectItem>
                        <SelectItem value="Better">Better</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                    </SelectContent>

                </Select>

                {errors.ujaniFoodRating && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniFoodRating.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="ujaniHygieneRating">Hygiene Rating</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("ujaniHygieneRating", val as RatingType);
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Hygiene Rating"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Average">Average</SelectItem>
                        <SelectItem value="Better">Better</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                    </SelectContent>

                </Select>

                {errors.ujaniHygieneRating && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniHygieneRating.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="ujaniManagementRating">Management Rating</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("ujaniManagementRating", val as RatingType);
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Management Rating"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Average">Average</SelectItem>
                        <SelectItem value="Better">Better</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                    </SelectContent>

                </Select>

                {errors.ujaniManagementRating && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniManagementRating.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="ujaniEventsRating">Events Rating</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("ujaniEventsRating", val as RatingType);
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Events Rating"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Average">Average</SelectItem>
                        <SelectItem value="Better">Better</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                    </SelectContent>

                </Select>

                {errors.ujaniEventsRating && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniEventsRating.message}
                    </p>
                )}

            </div> */}

            <div className="space-y-2">

                <Label htmlFor="ujaniAttendedRegularly">Attended Regularly</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("ujaniAttendedRegularly", val as "Yes" | "No");
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Attended Regularly"></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                    </SelectContent>

                </Select>

                {errors.ujaniAttendedRegularly && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniAttendedRegularly.message}
                    </p>
                )}

            </div>

            {"No" === watch("ujaniAttendedRegularly") && (

                <div className="space-y-2">

                    <Label htmlFor="ujaniNotAttendedRegularlyReason">Reason</Label>
                    <Textarea 
                        id="ujaniNotAttendedRegularlyReason"
                        {...register("ujaniNotAttendedRegularlyReason")}
                        placeholder="Reason"
                    ></Textarea>

                    {errors.ujaniNotAttendedRegularlyReason && (
                        <p className="text-red-500 text-sm">
                            {errors.ujaniNotAttendedRegularlyReason.message}
                        </p>
                    )}

                </div>
            )}

            <div className="space-y-2">

                <Label htmlFor="ujaniExtraNotes">Extra Notes</Label>
                <Textarea 
                    id="ujaniExtraNotes"
                    {...register("ujaniExtraNotes")}
                    placeholder="Extra Notes"
                ></Textarea>

                {errors.ujaniExtraNotes && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniExtraNotes.message}
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