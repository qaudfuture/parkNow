import { View, Dimensions } from 'react-native';
import React from 'react';
import { constantItems } from './type';

const Indicator: React.FC = ({ scrollX }) => {
    const { width } = Dimensions.get('screen');
    return (
        <View
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 125,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
            {constantItems.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                console.log('inputRangeinputRange', inputRange);

                const scale = scrollX.interpolate({
                    inputRange: inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extraPolate: 'clamp',
                });
                console.log('inputRangeinputRange', scrollX, scale);
                return (
                    <View
                        key={`indicator-${i}`}
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            backgroundColor: '#FED94D',
                            margin: 10,
                            // transform: [{
                            //     scale: scale
                            // }]
                        }}></View>
                );
            })}
        </View>
    );
};

export default Indicator;
