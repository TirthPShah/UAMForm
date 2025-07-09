export interface FieldSchema {
    /**
     * If true, allows multiple values (e.g., multiple files for file input).
     */
    multiple?: boolean;
    name: string;
    label: string;
    type: 'text' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'file' | 'datalist' | 'email' | 'phone';
    placeholder?: string;
    options?: string[];
    required?: boolean;
    group?: string;
    visible?: (values: any) => boolean;
}