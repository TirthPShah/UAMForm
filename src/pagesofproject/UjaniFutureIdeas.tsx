"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "@/app/types/type";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface UjaniFutureIdeasPageProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
    onBack: () => void;
    onNext: () => void;
}

export default function UjaniFutureIdeasPage({register, errors, onBack, onNext} : UjaniFutureIdeasPageProps) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Ujani Future Ideas</h2>

            <div className="space-y-2">

                <Label htmlFor="ujaniFutureIdeasSuggestions">Suggestion for Future Ujani</Label>
                <Textarea
                    id="ujaniFutureIdeasSuggestions"
                    placeholder="Suggestions"
                    {...register("ujaniFutureIdeasSuggestions")}
                />

                {errors.ujaniFutureIdeasSuggestions && (
                    <p className="text-red-500 text-sm">
                        {errors.ujaniFutureIdeasSuggestions.message}
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