export interface DateProps {
    date: Date;
    onSelectDate: (p: string) => void;
    selected: string;
}

export interface CalendarProps {
    onSelectDate: (p: string) => void;
    selected: string;
}

export interface NextMonthInfo {
    Date: Array;
}
