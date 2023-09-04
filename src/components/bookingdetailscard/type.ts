// Props interface for the AdvancedCard component

export interface BookingDetailListProps {
    startDate: string;
    endDate: string;
}

export interface BookingDetailProps {
    data: BookingDetailListProps[] | BookingDetailListProps;
    onEditBooking: (param: BookingDetailListProps) => void;
}
