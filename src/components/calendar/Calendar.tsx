import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CalendarList from './CalendarList';

const AppCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <View style={styles.container}>
            <CalendarList onSelectDate={setSelectedDate} selected={selectedDate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

export default AppCalendar;
