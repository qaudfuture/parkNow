import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CalendarProps } from './type';
import { Spacer, Text } from '../../components';
import DateCard from './CalendarCard';

interface MonthInfo {
    name: string;
    dates: Date[];
}

const CalendarList: React.FC<CalendarProps> = ({ onSelectDate, selected }) => {
    const [getMonthData, setMonthData] = useState<MonthInfo>({ name: 'Jan', dates: [] });
    const [currentYear, setCurrentYear] = useState<number>(0);
    const [currentMonth, setCurrentMonth] = useState<number>(0);
    const [selectedMonth, setSelectedMonth] = useState<number>(0);

    const getRemainingNumberofDaysinMonth = (): number => {
        const currentDate = new Date();
        // Get the last day of the current month
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        // Calculate the remaining days
        const remainingDays = lastDayOfMonth.getDate() - currentDate.getDate();
        return remainingDays;
    };

    const getCurrentMonthNumber = (): number => {
        const currentDate = new Date();
        return currentDate.getMonth(); // Returns 0-11 for January-December
    };

    const getMonthInfo = (year: number, month: number): MonthInfo => {
        const currentMonthNumber = getCurrentMonthNumber();
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const lastDayOfMonth = new Date(year, month + 1, 0);
        let numberOfDays = lastDayOfMonth.getDate();
        const monthDates: Date[] = [];
        if (currentMonthNumber == month) {
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            const totalDaysInMonth = lastDayOfMonth.getDate();
            numberOfDays = getRemainingNumberofDaysinMonth();
            for (let day = currentDay; day <= totalDaysInMonth; day++) {
                monthDates.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
            }
        } else {
            for (let i = 1; i <= numberOfDays; i++) {
                monthDates.push(new Date(year, month, i));
            }
        }
        return {
            name: monthNames[month],
            dates: monthDates,
        };
    };

    useEffect(() => {
        // Example usage
        const currentMonthNumber = getCurrentMonthNumber();
        const currentYear = new Date().getFullYear();
        setCurrentYear(currentYear);
        setCurrentMonth(currentMonthNumber);
        setSelectedMonth(currentMonthNumber);
        const currentMonthInfo = getMonthInfo(currentYear, currentMonthNumber);
        setMonthData(currentMonthInfo);
    }, []);

    const getNextMonth = () => {
        const nextMonth = selectedMonth + 1;
        setSelectedMonth(nextMonth);
        const currentMonthInfo = getMonthInfo(currentYear, nextMonth);
        setMonthData(currentMonthInfo);
    };

    const previousMonth = () => {
        const nextMonth = selectedMonth - 1;
        setSelectedMonth(nextMonth);
        const currentMonthInfo = getMonthInfo(currentYear, nextMonth);
        setMonthData(currentMonthInfo);
    };
    console.log('getMonthData', getMonthData);

    return (
        <>
            <View style={styles.centered}>
                {selectedMonth == currentMonth ? null : (
                    <TouchableOpacity onPress={() => previousMonth()}>
                        <Ionicons
                            name='chevron-back-sharp'
                            color={'black'}
                            size={26}
                            style={{ marginHorizontal: 14, marginBottom: 5 }}
                        />
                    </TouchableOpacity>
                )}
                <Text variant='title' style={{ color: '#516980' }}>
                    {getMonthData.name}
                </Text>
                <TouchableOpacity onPress={() => getNextMonth()}>
                    <Ionicons
                        name='chevron-forward-sharp'
                        color={'black'}
                        size={26}
                        style={{ marginHorizontal: 14, marginBottom: 5 }}
                    />
                </TouchableOpacity>
            </View>
            <Spacer size='md' />
            <View style={styles.dateSection}>
                <View style={styles.scroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {getMonthData.dates.map((date, index) => (
                            <DateCard key={index} date={date} onSelectDate={onSelectDate} selected={selected} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default CalendarList;

const styles = StyleSheet.create({
    centered: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    dateSection: {
        width: '100%',
    },
    scroll: {
        height: 150,
    },
});
