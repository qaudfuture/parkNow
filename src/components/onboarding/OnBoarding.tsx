import { View, Animated } from 'react-native';
import { constantItems } from './type';
import { Button } from '../Button';
import React, { useRef } from 'react';
import OnBoardingItem from './OnBoardingItem';
import Indicator from './OnBoardingIndicator';

type OnBoardingProps = {
    onClickLogin(): void;
    onClickRegister(): void;
};

const OnBoardingComp: React.FC<OnBoardingProps> = ({ onClickLogin, onClickRegister }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    return (
        <View style={{ flex: 1, marginVertical: 10 }}>
            <Animated.FlatList
                data={constantItems}
                renderItem={({ item }) => <OnBoardingItem item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                // onViewableItemsChanged={viewAbleItemsChanged}
                viewabilityConfig={viewConfig}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'black' }}>
                <Button title='Sign up' buttonStyles={{ backgroundColor: '#FFF' }} onPressButton={onClickLogin} />
                <Button
                    title='Login'
                    buttonStyles={{ backgroundColor: '#FFF', width: '60%' }}
                    onPressButton={onClickRegister}
                />
                <Indicator scrollX={scrollX} />
            </View>
        </View>
    );
};

export default OnBoardingComp;
