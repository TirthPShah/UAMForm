export interface FieldSchema {
    name: string;
    label: string;
    type: 'text' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'file' | 'datalist' | 'email' | 'phone';
    placeholder?: string;
    options?: string[];
    required?: boolean;
    visible?: (values: any) => boolean;
}