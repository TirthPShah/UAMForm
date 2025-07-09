// import { useForm } from "react-hook-form"; // Removed for React-only state
import DynamicFormSection from "@/components/DynamicFormSection";
import React from "react";

interface ChildFormSectionProps {
  formData: any;
  setFormData: (data: any) => void;
  schema: any[];
  visibleFields: (values: any) => string[];
  subtitle: string;
}

const ChildFormSection: React.FC<ChildFormSectionProps> = ({
  formData,
  setFormData,
  schema,
  visibleFields,
  subtitle,
}) => {
  return (
    <DynamicFormSection
      schema={schema}
      formData={formData}
      setFormData={setFormData}
      sectionTitle="Child Under 18"
      subtitle={subtitle}
      visibleFields={visibleFields}
    />
  );
};

export default ChildFormSection;