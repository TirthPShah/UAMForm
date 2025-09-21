"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { defaultUAMFormData, UAMFormData } from "./types/type";
import { Card } from "@/components/ui/card";
import { defaultHoFData } from "./types/hof";
import HoFPageDetails from "@/pagesofproject/HoF";
import SpousePageDetails from "@/pagesofproject/Spouse";
import ChildUnder18 from "@/pagesofproject/ChildUnder18";
import ChildAbove18Page from "@/pagesofproject/ChildAbove18";
import UjaniPage from "@/pagesofproject/Ujani";
import UjaniFutureIdeasPage from "@/pagesofproject/UjaniFutureIdeas";
import SupportAndEventsPage from "@/pagesofproject/SupportAndEvents";
import ExtrasPage from "@/pagesofproject/Extras";
import SurveyedByPage from "@/pagesofproject/SurveyedBy";

export default function Home() {

    const [step, setStep] = useState(0);

    const {register, handleSubmit, setValue, formState: { errors }, watch, control} = useForm<UAMFormData>({
        defaultValues: defaultUAMFormData,
        mode: "onChange"
    });

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
            } else {
                toast.error(`Upload failed: ${res.statusText}`, {
                    duration: 5000,
                });
            }
        } catch (error) {
            toast.error('Upload failed: Network error', {
                duration: 5000,
            });
        }
    };

    const hoFNext = async () => {
        
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setValue("headOfFamilyLat", latitude.toString());
                    setValue("headOfFamilyLon", longitude.toString());
                }
            )
        }

        const maritalStatus = watch("headOfFamilyMaritalStatus");

        if(maritalStatus !== "Single") {
            setStep(1);
        } else {
            setStep(5);
        }

    }

    return (
        <Card className="max-w-4xl mx-auto p-6 mt-10 mb-10 rounded-2xl shadow">
            <form onSubmit={handleSubmit(onSubmit)}>

                {step === 0 && 

                    <HoFPageDetails 
                        register={register}
                        errors={errors}
                        watch={watch}
                        setValue={setValue}
                        onNext={hoFNext}
                    />

                }

                {step === 1 &&

                    <SpousePageDetails
                        register={register}
                        errors={errors}
                        watch={watch}
                        setValue={setValue}
                        onBack={() => {setStep(0)}}
                        onNext={() => {setStep(2)}}                
                    />
                
                }

                {step === 2 &&

                    <ChildUnder18
                        register={register}
                        errors={errors}
                        watch={watch}
                        control={control}
                        setValue={setValue}
                        onBack={() => {setStep(1)}}
                        onNext={() => {setStep(3)}}
                    />

                }

                {step === 3 && 

                    <ChildAbove18Page
                        register={register}
                        errors={errors}
                        watch={watch}
                        control={control}
                        setValue={setValue}
                        onBack={() => {setStep(2)}}
                        onNext={() => {setStep(4)}}
                    />

                }

                {step === 4 &&

                    <UjaniPage
                        register={register}
                        errors={errors}
                        watch={watch}
                        setValue={setValue}
                        onBack={() => {setStep(3)}}
                        onNext={() => {setStep(5)}}
                    />

                }

                {step === 5 &&

                    <UjaniFutureIdeasPage
                        register={register}
                        errors={errors}
                        onBack={() => {setStep(4)}}
                        onNext={() => {setStep(6)}}
                    />

                }

                {step === 6 &&

                    <SupportAndEventsPage
                        register={register}
                        errors={errors}
                        watch={watch}
                        control={control}
                        setValue={setValue}
                        onBack={() => {setStep(5)}}
                        onNext={() => {setStep(7)}}
                    />

                }

                {step === 7 &&

                    <ExtrasPage
                        register={register}
                        errors={errors}
                        onBack={() => {setStep(6)}}
                        onNext={() => {setStep(8)}}
                    />

                }

                {step === 8 &&

                    <SurveyedByPage
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        onBack={() => {setStep(7)}}
                        onNext={handleSubmit(onSubmit)}
                    />

                }

            </form>
        </Card>
    )
}