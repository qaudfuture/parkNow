// CustomCalendar.tsx

import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar, DateObject, MarkedDates } from 'react-native-calendars';

interface CustomCalendarProps {
    onSingleDaySelect: (date: DateObject) => void;
    onMultipleDaysSelect: (dates: DateObject[]) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onSingleDaySelect, onMultipleDaysSelect }) => {
    const [selectedDates, setSelectedDates] = useState<MarkedDates>({});

    const handleDayPress = (date: DateObject) => {
        const newSelectedDates: MarkedDates = { ...selectedDates };

        if (newSelectedDates[date.dateString]) {
            // Date already selected, deselect it
            delete newSelectedDates[date.dateString];
        } else {
            // Date not selected, select it
            newSelectedDates[date.dateString] = { selected: true, selectedColor: '#FED94D' };
        }

        setSelectedDates(newSelectedDates);

        const selectedDatesArray = Object.keys(newSelectedDates).map((dateString) => {
            return { dateString };
        });

        if (selectedDatesArray.length === 1) {
            onSingleDaySelect(selectedDatesArray[0]);
        } else {
            onMultipleDaysSelect(selectedDatesArray);
        }
    };

    return (
        <View>
            <Calendar
                onDayPress={handleDayPress}
                markingType='custom'
                markedDates={selectedDates}
                style={{
                    borderRadius: 5,
                    backgroundColor: 'transparent',
                }}
                theme={{
                    calendarBackground: 'transparent',
                    dayTextColor: 'black',
                    textDisabledColor: '#444',
                    monthTextColor: '#888',
                }}
            />
        </View>
    );
};

export default CustomCalendar;
