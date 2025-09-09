"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "@/app/types/type";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ExtrasPageProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
    onBack: () => void;
    onNext: () => void;
}

export default function ExtrasPage ({register, errors, onBack, onNext} : ExtrasPageProps) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">Extras</h2>

            <div className="space-y-2">

                <Label htmlFor="extrasNotes">Additional Notes</Label>
                <Textarea
                    id="extrasNotes"
                    placeholder="Additional Notes"
                    {...register("extrasNotes")}
                />

                {errors.extrasNotes && (
                    <p className="text-red-500 text-sm">
                        {errors.extrasNotes.message}
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