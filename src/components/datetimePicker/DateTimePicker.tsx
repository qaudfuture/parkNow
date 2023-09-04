import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface DateTimePickerProps {
    isVisible: boolean;
    onTimeSelected: (selectedDate: Date, editDateType: string) => void;
    onCancel: () => void;
    editTimeType: string;
}

const DateTimePickers: React.FC<DateTimePickerProps> = ({ onTimeSelected, isVisible, onCancel, editTimeType }) => {
    console.log('DATTETETIMEMMODAY', isVisible);
    const _onTimeSlotEdited = (date: Date) => {
        onTimeSelected(date, editTimeType);
    };
    const handleCancel = () => {
        onCancel();
    };

    return (
        <DateTimePickerModal
            locale='en_GB'
            isVisible={isVisible}
            mode='time'
            onConfirm={_onTimeSlotEdited}
            onCancel={handleCancel}
            date={new Date()}
        />
    );
};

export default DateTimePickers;
