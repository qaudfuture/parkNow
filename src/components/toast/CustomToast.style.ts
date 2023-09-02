import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 44,
        borderRadius: 30,
        margin: 5,
        shadowColor: '#5f5f5fbf',
        shadowOpacity: 0.3,
        elevation: 3,
        bottom: 100,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
    },
});
