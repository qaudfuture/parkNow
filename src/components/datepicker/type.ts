export type pickerType = 'range' | 'multiple' | 'single';

export interface DatePickerProps {
    pickerMode: pickerType;
    visible: boolean;
    onDismiss: () => void;
    onConfirm: (param: any) => void;
    date: Date;
}
