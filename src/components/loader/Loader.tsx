import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { Images } from '../../resources/images';

const Loader: React.FC = () => {
    return (
        <View style={style.loader}>
            <Image style={style.image} source={Images.loader} />
            <ActivityIndicator style={style.indicator} />
        </View>
    );
};

const style = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#53242d',
        backgroundColor: '#FFF',
        // backgroundColor: '#47131E',
    },
    image: {},
    indicator: {
        position: 'absolute',
        // top: AppUtils.height / 2,
    },
});

export default Loader;
