// CustomHomeTab.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomTabProps {
    children: any;
    onPress(): void;
}

const CustomTab: React.FC<CustomTabProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow,
            }}
            onPress={onPress}>
            <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#FED94D' }}>{children}</View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTab: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default CustomTab;
