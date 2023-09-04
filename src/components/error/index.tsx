import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../components';

const Error = () => {
    return (
        <View style={styles.container}>
            <Text variant='title'>Something went wrong...</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Error;
