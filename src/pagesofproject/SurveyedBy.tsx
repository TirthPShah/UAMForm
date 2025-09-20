"use client"

import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { UAMFormData } from "@/app/types/type";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface SurveyedByProps {
    register: UseFormRegister<UAMFormData>;
    errors: FieldErrors<UAMFormData>;
    onBack: () => void;
    onNext: () => void;
    setValue: UseFormSetValue<UAMFormData>;
}

export default function SurveyedByPage ({register, errors, onBack, onNext, setValue} : SurveyedByProps) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Surveyed By</h2>

            <div className="space-y-2">

                <Label htmlFor="sureveyedByTeam">Team</Label>
                <Select
                    onValueChange={(val) => {
                        setValue("surveyedByTeam", val as "Team 1" | "Team 2" | "Team 3" | "Team 4" | "Team 5")
                    }}
                >

                    <SelectTrigger>
                        <SelectValue placeholder="Team No."></SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="Team 1">Team 1</SelectItem>
                        <SelectItem value="Team 2">Team 2</SelectItem>
                        <SelectItem value="Team 3">Team 3</SelectItem>
                        <SelectItem value="Team 4">Team 4</SelectItem>
                        <SelectItem value="Team 5">Team 5</SelectItem>
                    </SelectContent>

                </Select>

                {errors.surveyedByTeam && (
                    <p className="text-red-500 text-sm">
                        {errors.surveyedByTeam.message}
                    </p>
                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="surveyedByNotes">Notes</Label>
                <Input
                    id="surveyedByNotes"
                    placeholder="Notes"
                    {...register("surveyedByNotes")}
                />

                {errors.surveyedByNotes && (
                    <p className="text-red-500 text-sm">
                        {errors.surveyedByNotes.message}
                    </p>
                )}
            </div>

            <div className="flex justify-between pt-4">

                <Button type="button" onClick={onBack}>
                    Back
                </Button>

                <Button type="submit" onClick={onNext}>
                    Submit
                </Button>

            </div>

        </div>

    )
}