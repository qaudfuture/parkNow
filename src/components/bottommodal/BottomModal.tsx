import React from 'react';
import { Button, Text, Spacer } from '../../components';
import { BottomTabProps } from './type';
import { View, TouchableOpacity } from 'react-native';
import { ModalContainer, ModalContent, ModalText } from './BottomModel.style';
import { getMonthDateAndDay } from '../../utils/dateUtils';
import { localTime } from '../../utils/dateUtils';

const BottomCard: React.FC<BottomTabProps> = ({
    isVisble,
    onPress,
    selectedCard,
    onStartTimeSelected,
    onEndTimeSelected,
}) => {
    const dateTitle = new Date(selectedCard.startDate);
    const date = getMonthDateAndDay(dateTitle);

    const startTime = localTime(selectedCard.startDate);
    const endTime = localTime(selectedCard.endDate);

    return (
        <ModalContainer isVisible={isVisble} swipeDirection='down' onSwipeComplete={onPress} onBackdropPress={onPress}>
            <ModalContent>
                <ModalText>Edit Time Slot</ModalText>
                <Spacer size='lg' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        onPress={onStartTimeSelected}
                        style={{ borderWidth: 1, padding: 10, borderColor: 'lightgray', borderRadius: 10 }}>
                        <Text variant='title'>
                            {date.dayOfWeek} {date.month} {date.date}
                        </Text>
                        <Spacer size='xs' />
                        <Text variant='body' style={{ color: 'gray', textAlign: 'right', fontSize: 12 }}>
                            {startTime}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onEndTimeSelected}
                        style={{ borderWidth: 1, padding: 10, borderColor: 'lightgray', borderRadius: 10 }}>
                        <Text variant='title'>
                            {date.dayOfWeek} {date.month} {date.date}
                        </Text>
                        <Spacer size='xs' />
                        <Text variant='body' style={{ color: 'gray', textAlign: 'left', fontSize: 12 }}>
                            {endTime}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Spacer size='lg' />
                <Button
                    title='Save'
                    buttonStyles={{ backgroundColor: '#FED94D', width: '90%', alignSelf: 'center' }}
                    onPressButton={onPress}
                />

                <Spacer size='md' />
            </ModalContent>
        </ModalContainer>
    );
};

export default BottomCard;
