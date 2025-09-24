"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { defaultUAMFormData, UAMFormData } from "./types/type";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import HoFPageDetails from "@/pagesofproject/HoF";
import SpousePageDetails from "@/pagesofproject/Spouse";
import ChildUnder18 from "@/pagesofproject/ChildUnder18";
import ChildAbove18Page from "@/pagesofproject/ChildAbove18";
import UjaniPage from "@/pagesofproject/Ujani";
import SupportAndEventsPage from "@/pagesofproject/SupportAndEvents";
import ExtrasPage from "@/pagesofproject/Extras";
import SurveyedByPage from "@/pagesofproject/SurveyedBy";

const AUTOSAVE_KEY = "uam_form_autosave";
const AUTOSAVE_FLAG_KEY = "uam_form_has_data";
const AUTOSAVE_STEP_KEY = "uam_form_current_step";

export default function Home() {
    const [step, setStep] = useState(0);
    const [showClearDataDialog, setShowClearDataDialog] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const { register, handleSubmit, setValue, formState: { errors }, watch, control, reset } = useForm<UAMFormData>({
        defaultValues: defaultUAMFormData,
        mode: "onChange"
    });

    // Load saved data on component mount
    useEffect(() => {
        loadSavedData();
    }, []);

    // Auto-save whenever form data changes
    useEffect(() => {
        const subscription = watch((value) => {
            if (!isFormSubmitted) {
                saveFormData(value as UAMFormData);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, isFormSubmitted]);

    // Auto-save current step
    useEffect(() => {
        if (!isFormSubmitted) {
            localStorage.setItem(AUTOSAVE_STEP_KEY, step.toString());
        }
    }, [step, isFormSubmitted]);

    const loadSavedData = () => {
        try {
            const hasData = localStorage.getItem(AUTOSAVE_FLAG_KEY);
            
            if (hasData === "true") {
                const savedData = localStorage.getItem(AUTOSAVE_KEY);
                const savedStep = localStorage.getItem(AUTOSAVE_STEP_KEY);
                
                if (savedData) {
                    const parsedData = JSON.parse(savedData);
                    
                    // Reset form with saved data
                    reset(parsedData);
                    
                    // Restore step
                    if (savedStep) {
                        setStep(parseInt(savedStep, 10));
                    }
                    
                    toast.success('Previous form data loaded successfully!', {
                        duration: 3000,
                    });
                }
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
            toast.error('Error loading saved data', {
                duration: 3000,
            });
        }
    };

    const saveFormData = (data: UAMFormData) => {
        try {
            // Convert data to JSON, handling Files and other non-serializable objects
            const dataToSave = JSON.stringify(data, (key, value) => {
                // Skip File objects as they can't be serialized
                if (value instanceof File || value instanceof FileList) {
                    return undefined;
                }
                return value;
            });
            
            localStorage.setItem(AUTOSAVE_KEY, dataToSave);
            localStorage.setItem(AUTOSAVE_FLAG_KEY, "true");
        } catch (error) {
            console.error('Error saving form data:', error);
        }
    };

    const clearSavedData = () => {
        localStorage.removeItem(AUTOSAVE_KEY);
        localStorage.removeItem(AUTOSAVE_FLAG_KEY);
        localStorage.removeItem(AUTOSAVE_STEP_KEY);
        toast.success('Saved data cleared for new entry', {
            duration: 3000,
        });
    };

    const appendFormData = (
        formData: FormData,
        data: any,
        parentKey?: string
    ): void => {
        if (data === null || data === undefined) {
            formData.append(parentKey ?? "", "");
            return;
        }

        if (data instanceof File) {
            formData.append(parentKey ?? data.name, data);
            return;
        }

        if (data instanceof FileList) {
            Array.from(data).forEach((file, index) => {
                formData.append(parentKey ? `${parentKey}[${index}]` : file.name, file);
            });
            return;
        }

        if (Array.isArray(data)) {
            data.forEach((value, index) => {
                appendFormData(formData, value, parentKey ? `${parentKey}[${index}]` : `${index}`);
            });
            return;
        }

        if (typeof data === "object" && !(data instanceof Date)) {
            Object.keys(data).forEach((key) => {
                appendFormData(
                    formData,
                    data[key],
                    parentKey ? `${parentKey}[${key}]` : key
                );
            });
            return;
        }

        if (data instanceof Date) {
            formData.append(parentKey ?? "", data.toISOString());
            return;
        }

        formData.append(parentKey ?? "", String(data));
    };

    const onSubmit: SubmitHandler<UAMFormData> = async (data) => {
        setIsFormSubmitted(true);
        
        // We will convert the data to FormData object to send files
        const formData = new FormData();

        // Recursive function to append data to formData
        appendFormData(formData, data);

        // Show uploading toast
        toast('Data upload in progress (Estimated time : 40 seconds)...', {
            duration: 5000,
            style: { background: '#666', color: 'white' },
        });

        try {
            const res = await fetch("/api/submit", {
                method: "POST",
                body: formData,
            });

            if (res.ok) { // Status code 2XX
                toast.success('Data uploaded successfully!', {
                    duration: 5000,
                });
                
                // Show dialog asking whether to clear data for next person
                setShowClearDataDialog(true);
                
            } else {
                toast.error(`Upload failed: ${res.statusText}`, {
                    duration: 5000,
                });
                setIsFormSubmitted(false);
            }
        } catch (error) {
            toast.error('Upload failed: Network error', {
                duration: 5000,
            });
            setIsFormSubmitted(false);
        }
    };

    const handleKeepDataForNext = () => {
        setShowClearDataDialog(false);
        toast.info('Data saved for next person, reload to autofill', {
            duration: 3000,
        });
        // Reset form to default state but keep the data in localStorage
        reset(defaultUAMFormData);
        setStep(0);
        setIsFormSubmitted(false);
    };

    const handleClearDataForNext = () => {
        setShowClearDataDialog(false);
        clearSavedData();
        // Reset form to default state
        reset(defaultUAMFormData);
        setStep(0);
        setIsFormSubmitted(false);
    };

    const hoFNext = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setValue("headOfFamilyLat", latitude.toString());
                    setValue("headOfFamilyLon", longitude.toString());
                }
            );
        }

        const maritalStatus = watch("headOfFamilyMaritalStatus");

        if (maritalStatus !== "Single") {
            setStep(1);
        } else {
            setStep(4);
        }
    };

    const handleStepChange = (newStep: number) => {
        setStep(newStep);
    };

    return (
        <>
            <Card className="max-w-4xl mx-auto p-6 mt-10 mb-10 rounded-2xl shadow">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {step === 0 && (
                        <HoFPageDetails 
                            register={register}
                            errors={errors}
                            watch={watch}
                            setValue={setValue}
                            onNext={hoFNext}
                        />
                    )}

                    {step === 1 && (
                        <SpousePageDetails
                            register={register}
                            errors={errors}
                            watch={watch}
                            setValue={setValue}
                            onBack={() => handleStepChange(0)}
                            onNext={() => handleStepChange(2)}                
                        />
                    )}

                    {step === 2 && (
                        <ChildUnder18
                            register={register}
                            errors={errors}
                            watch={watch}
                            control={control}
                            setValue={setValue}
                            onBack={() => handleStepChange(1)}
                            onNext={() => handleStepChange(3)}
                        />
                    )}

                    {step === 3 && (
                        <ChildAbove18Page
                            register={register}
                            errors={errors}
                            watch={watch}
                            control={control}
                            setValue={setValue}
                            onBack={() => handleStepChange(2)}
                            onNext={() => handleStepChange(4)}
                        />
                    )}

                    {step === 4 && (
                        <UjaniPage
                            register={register}
                            errors={errors}
                            watch={watch}
                            setValue={setValue}
                            onBack={() => handleStepChange(3)}
                            onNext={() => handleStepChange(5)}
                        />
                    )}

                    {step === 5 && (
                        <SupportAndEventsPage
                            register={register}
                            errors={errors}
                            watch={watch}
                            control={control}
                            setValue={setValue}
                            onBack={() => handleStepChange(4)}
                            onNext={() => handleStepChange(6)}
                        />
                    )}

                    {step === 6 && (
                        <ExtrasPage
                            register={register}
                            errors={errors}
                            onBack={() => handleStepChange(5)}
                            onNext={() => handleStepChange(7)}
                        />
                    )}

                    {step === 7 && (
                        <SurveyedByPage
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            onBack={() => handleStepChange(6)}
                            onNext={handleSubmit(onSubmit)}
                        />
                    )}
                </form>

                {/* Manual clear data button for testing/debugging */}
                <div className="mt-4 text-center">
                    <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={clearSavedData}
                        className="text-xs"
                    >
                        Clear Saved Data
                    </Button>
                </div>
            </Card>

            {/* Dialog for asking whether to keep data for next person */}
            <AlertDialog open={showClearDataDialog} onOpenChange={setShowClearDataDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Data Submitted Successfully!</AlertDialogTitle>
                        <AlertDialogDescription>
                            Would you like to keep this data saved for the next person's entry, or clear it to start fresh?
                            <br /><br />
                            <b>Reload the page after clicking the button</b>
                            <br />
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>

                        <div className="flex gap-6 sm:flex-row flex-col">
                            <AlertDialogCancel onClick={handleKeepDataForNext}>
                                Keep Data for Next Person
                            </AlertDialogCancel>
                            <AlertDialogAction onClick={handleClearDataForNext}>
                                Clear Data for New Person
                            </AlertDialogAction>
                        </div>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}