// app/test/page.tsx
'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { headOfFamilyPersonalInfoSchema } from "@/schemas/HeadOfFamilyPersonalInfo";
import { spouseSchema } from "@/schemas/Spouse";
import { childUnder18Schema } from "@/schemas/ChildUnder18";
import { childrenAbove18Schema } from "@/schemas/ChildrenAbove18";
import { ujaniSchema } from "@/schemas/Ujani";
import { ujaniFutureIdeasSchema } from "@/schemas/UjaniFutureIdeas";
import { supportSchema } from "@/schemas/Support";
import { extrasSchema } from "@/schemas/Extras";
import { surveyedBySchema } from "@/schemas/SurveyedBy";
import DynamicFormSection from "@/components/DynamicFormSection";
import ChildFormSection from "@/components/ChildFormSection";

const SECTION_ORDER = [
  "hof", "spouse", "childrenU18", "childrenAbove18", "ujani", "ujaniFuture", "support", "extras", "surveyedBy"
];

export default function MultiSectionFormPage() {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [formData, setFormData] = useState<any>({
    hof: {},
    spouse: {},
    childrenU18: [],
    childrenAbove18: [],
    ujani: {},
    ujaniFuture: {},
    support: {},
    extras: {},
    surveyedBy: {},
  });
  const [submitted, setSubmitted] = useState(false);

  // Section helpers
  const currentSection = SECTION_ORDER[sectionIdx];

  // Conditional logic
  const showSpouse = formData.hof?.hofMaritalStatus && formData.hof.hofMaritalStatus !== "Single";

  // Navigation
  const goNext = () => {
    let next = sectionIdx + 1;
    // Skip Spouse if not required
    if (SECTION_ORDER[next] === "spouse" && !showSpouse) next++;
    setSectionIdx(next);
  };
  const goPrev = () => {
    let prev = sectionIdx - 1;
    // Skip Spouse if not required
    if (SECTION_ORDER[sectionIdx] === "spouse" && !showSpouse) prev--;
    setSectionIdx(prev);
  };

  // Download as JSON
  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "survey_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Section renders
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Survey Complete</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto w-full max-w-3xl">
          {JSON.stringify(formData, null, 2)}
        </pre>
        <Button className="mt-4" type="button" onClick={handleDownloadJson}>Download JSON</Button>
      </div>
    );
  }

  // Section logic
  switch (currentSection) {
    case "hof":
      return (
        <DynamicFormSection
          schema={headOfFamilyPersonalInfoSchema}
          formData={formData.hof}
          setFormData={data => setFormData((prev: any) => ({ ...prev, hof: data }))}
          sectionTitle="Head of Family"
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </DynamicFormSection>
      );
    case "spouse":
      if (!showSpouse) { goNext(); return null; }
      return (
        <DynamicFormSection
          schema={spouseSchema}
          formData={formData.spouse}
          setFormData={data => setFormData((prev: any) => ({ ...prev, spouse: data }))}
          sectionTitle="Spouse"
          visibleFields={values => {
            // Only show fields that pass their .visible() condition if present
            return spouseSchema
              .filter(field => !field.visible || field.visible(values))
              .map(field => field.name);
          }}
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goPrev}>Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </DynamicFormSection>
      );
    case "childrenU18":
      // Only show if marital status is NOT Single
      if (!showSpouse) { goNext(); return null; }
      return (
        <div className="max-w-3xl mx-auto py-10">
          <h2 className="text-xl font-bold mb-4 text-center">Children Under 18</h2>
          {formData.childrenU18.map((child: any, idx: number) => (
            <ChildFormSection
              key={idx}
              formData={child}
              setFormData={data => setFormData((prev: any) => {
                const arr = [...prev.childrenU18];
                arr[idx] = { ...arr[idx], ...data };
                return { ...prev, childrenU18: arr };
              })}
              schema={childUnder18Schema}
              visibleFields={values => {
                // Only show fields if their conditions are met
                const base = [
                  'childu18Name',
                  'childu18Dob',
                  'childu18Gender',
                  'childu18PlaceOfStudy',
                  'childu18MobileNumber',
                  'childu18Hobbies',
                  'childu18Interests',
                ];
                if (values.childu18PlaceOfStudy === 'School') {
                  return [...base, 'childu18SchoolClass'];
                } else if (values.childu18PlaceOfStudy === 'Diploma') {
                  return [...base, 'childu18DiplomaYear', 'childu18DiplomaSpec'];
                }
                return base;
              }}
              subtitle={`Child ${idx + 1}`}
            />
          ))}
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={() => setFormData((prev: any) => ({ ...prev, childrenU18: [...prev.childrenU18, {}] }))} variant="outline">Add Child</Button>
            <Button type="button" onClick={() => setSectionIdx(SECTION_ORDER.indexOf('spouse'))} variant="secondary">Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </div>
      );
    case "childrenAbove18":
      // Only show if marital status is NOT Single
      if (!showSpouse) { goNext(); return null; }
      return (
        <div className="max-w-3xl mx-auto py-10">
          <h2 className="text-xl font-bold mb-4 text-center">Children Above 18</h2>
          {formData.childrenAbove18.map((child: any, idx: number) => (
            <DynamicFormSection
              key={idx}
              schema={childrenAbove18Schema}
              formData={child}
              setFormData={data => setFormData((prev: any) => {
                const arr = [...prev.childrenAbove18];
                arr[idx] = { ...arr[idx], ...data };
                return { ...prev, childrenAbove18: arr };
              })}
              sectionTitle={`Child Above 18 - ${idx + 1}`}
              visibleFields={values => {
                // Only show fields that pass their .visible() condition if present
                return childrenAbove18Schema
                  .filter(field => !field.visible || field.visible(values))
                  .map(field => field.name);
              }}
            />
          ))}
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={() => setFormData((prev: any) => ({ ...prev, childrenAbove18: [...prev.childrenAbove18, {}] }))} variant="outline">Add Child</Button>
            <Button type="button" onClick={() => setSectionIdx(SECTION_ORDER.indexOf('childrenU18'))} variant="secondary">Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </div>
      );
    case "ujani":
      return (
        <DynamicFormSection
          schema={ujaniSchema}
          formData={formData.ujani}
          setFormData={data => setFormData((prev: any) => ({ ...prev, ujani: data }))}
          sectionTitle="Ujani"
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goPrev}>Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </DynamicFormSection>
      );
    case "ujaniFuture":
      return (
        <DynamicFormSection
          schema={ujaniFutureIdeasSchema}
          formData={formData.ujaniFuture}
          setFormData={data => setFormData((prev: any) => ({ ...prev, ujaniFuture: data }))}
          sectionTitle="Ujani - Future Ideas"
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goPrev}>Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </DynamicFormSection>
      );
    case "support":
      return (
        <DynamicFormSection
          schema={supportSchema}
          formData={formData.support}
          setFormData={data => setFormData((prev: any) => ({ ...prev, support: data }))}
          sectionTitle="Support"
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goPrev}>Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </DynamicFormSection>
      );
    case "extras":
      return (
        <DynamicFormSection
          schema={extrasSchema}
          formData={formData.extras}
          setFormData={data => setFormData((prev: any) => ({ ...prev, extras: data }))}
          sectionTitle="Extras"
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goPrev}>Back</Button>
            <Button type="button" onClick={goNext}>Next</Button>
          </div>
        </DynamicFormSection>
      );
    case "surveyedBy":
      return (
        <DynamicFormSection
          schema={surveyedBySchema}
          formData={formData.surveyedBy}
          setFormData={data => setFormData((prev: any) => ({ ...prev, surveyedBy: data }))}
          sectionTitle="Surveyed By"
        >
          <div className="flex gap-2 mt-4 justify-center">
            <Button type="button" onClick={goPrev}>Back</Button>
            <Button type="button" onClick={() => setSubmitted(true)}>Submit</Button>
          </div>
        </DynamicFormSection>
      );
    default:
      return null;
  }
}

