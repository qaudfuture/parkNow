import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../../components';
import moment from 'moment';
import { DateProps } from './type';

const DateCard: React.FC<DateProps> = ({ date, onSelectDate, selected }) => {
    /**
     * use moment to compare the date to today
     * if today, show 'Today'
     * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
     */
    const day =
        moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd');
    // get the day number e.g 1, 2, 3, 4, 5, 6, 7
    const dayNumber = moment(date).format('D');
    const currentDate = moment().format('YYYY-MM-DD');

    // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
    const fullDate = moment(date).format('YYYY-MM-DD');

    currentDate == fullDate;
    return (
        <TouchableOpacity
            onPress={() => onSelectDate(fullDate)}
            style={[
                styles.card,
                {
                    backgroundColor:
                        selected === fullDate
                            ? '#FAB41B'
                            : currentDate == fullDate
                            ? '#0A5298'
                            : 'rgba(254, 216, 77, 0.2)',
                },
            ]}>
            <Text
                variant='header'
                style={{
                    color: selected === fullDate ? 'white' : currentDate == fullDate ? 'lightgray' : '#FAB41B',
                    fontSize: 16,
                }}>
                {day}
            </Text>
            <Text
                variant='title'
                style={{ color: selected === fullDate ? 'white' : currentDate == fullDate ? 'lightgray' : '#FAB41B' }}>
                {dayNumber}
            </Text>
        </TouchableOpacity>
    );
};

export default DateCard;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        borderRadius: 10,
        borderColor: '#ddd',
        paddingVertical: 20,
        padding: 10,
        alignItems: 'center',
        height: 120,
        width: 75,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    big: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});
