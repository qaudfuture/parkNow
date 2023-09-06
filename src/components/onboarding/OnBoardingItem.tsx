import { View, useWindowDimensions, StyleSheet, Image } from 'react-native';
import React from 'react';
import { OnBoardingProps } from './type';
import { Text } from '@components/text';
import { Images } from '../../resources/images';

// Define the props type for the item component
type ItemComponentProps = {
    item: OnBoardingProps;
};

const OnBoardingItem: React.FC<ItemComponentProps> = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <View style={{ flex: 1, paddingVertical: 10 }}>
                <Image style={{ width: width }} resizeMode={'contain'} source={item.source} />
            </View>
            <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
                <View style={{ flex: 1 / 2, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                    <Image source={Images.carIcon} />
                    <Text variant='title' style={{ color: '#000', textAlign: 'center', paddingLeft: 20 }}>
                        {item.heading}
                    </Text>
                </View>
                <View style={{ flex: 3 / 4, padding: 20 }}>
                    <Text variant='header' style={{ color: '#000' }}>
                        {' '}
                        {item.description}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});
