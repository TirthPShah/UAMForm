import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import React from "react";

interface FieldSchema {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface DynamicFormSectionProps {
  schema: FieldSchema[];
  formData: any;
  setFormData: (data: any) => void;
  sectionTitle?: string;
  children?: React.ReactNode; // For custom buttons (Prev/Next)
  visibleFields?: string[] | ((formValues: any) => string[]);
  subtitle?: string;
}

export default function DynamicFormSection({ schema, formData, setFormData, sectionTitle, children, visibleFields, subtitle }: DynamicFormSectionProps) {
  // Determine which fields to show
  let fieldsToShow = schema;
  if (visibleFields) {
    const visible = typeof visibleFields === 'function' ? visibleFields(formData) : visibleFields;
    fieldsToShow = schema.filter(field => visible.includes(field.name));
  }

  // Handle input change
  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <Card>
        <CardContent className="p-6">
          {sectionTitle && <h2 className="text-xl font-bold mb-4">{sectionTitle}</h2>}
          {subtitle && <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>}
          <div className="space-y-6">
            {fieldsToShow.map((field) => (
              <div key={field.name} className="grid gap-2">
                <Label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </Label>
                {field.type === 'date' ? (
                  <Input
                    type="date"
                    id={field.name}
                    placeholder={field.placeholder || `Enter ${field.label}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === 'text' || field.type === 'email' || field.type === 'phone' ? (
                  <Input
                    type={field.type === 'phone' ? 'tel' : field.type}
                    id={field.name}
                    placeholder={field.placeholder || `Enter ${field.label}`}
                    value={formData[field.name] || ''}
                    onChange={e => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === 'select' && field.options ? (
                  <Select value={formData[field.name] || ''} onValueChange={value => handleChange(field.name, value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={`Select ${field.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : field.type === 'radio' && field.options ? (
                  <div className="flex gap-4">
                    {field.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-1">
                        <input
                          type="radio"
                          value={opt}
                          checked={formData[field.name] === opt}
                          onChange={() => handleChange(field.name, opt)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : field.type === 'file' ? (
                  <Input type="file" id={field.name} onChange={e => handleChange(field.name, e.target.files?.[0] || null)} />
                ) : field.type === 'checkbox' && field.options ? (
                  <div className="flex flex-col gap-2">
                    {field.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={Array.isArray(formData[field.name]) ? formData[field.name].includes(opt) : false}
                          onChange={e => {
                            const prev = Array.isArray(formData[field.name]) ? formData[field.name] : [];
                            if (e.target.checked) {
                              handleChange(field.name, [...prev, opt]);
                            } else {
                              handleChange(field.name, prev.filter((v: string) => v !== opt));
                            }
                          }}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    placeholder={field.placeholder || `Enter ${field.label}`}
                    className="border rounded px-3 py-2"
                    value={formData[field.name] || ''}
                    onChange={e => handleChange(field.name, e.target.value)}
                  />
                ) : null}
              </div>
            ))}
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 