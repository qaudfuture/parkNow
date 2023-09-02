import React from 'react';
import {
    Container,
    LeftInnerContainer,
    RightInnerContainer,
    Image,
    ImageContainer,
    LeftPreviousBookingUserContainer,
} from './ProfileFeatureListCard.Style';
import { FlatList } from 'react-native';
import { Spacer, Text } from '../../components';
import { ProfileFeatureListCardProps, ProfileFeatureCardItem } from './type';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileFeatureListCard: React.FC<ProfileFeatureListCardProps> = ({ data, onPress }) => {
    const renderItem = ({ item }: { item: ProfileFeatureCardItem }) => (
        <>
            <Spacer size='sm' />
            <Container onPress={() => onPress(item.screenName)}>
                <LeftInnerContainer>
                    <ImageContainer color={item.color}>
                        <Image source={item.image} resizeMode='contain' />
                    </ImageContainer>
                    <Spacer size='xs' />
                    <LeftPreviousBookingUserContainer>
                        <Text variant='title' style={{ fontSize: 14 }}>
                            {item.title}
                        </Text>
                        <Spacer size='xs' />
                    </LeftPreviousBookingUserContainer>
                </LeftInnerContainer>
                <RightInnerContainer>
                    <Ionicons name='chevron-forward-sharp' color='gray' size={16} />
                </RightInnerContainer>
            </Container>
            <Spacer size='sm' />
        </>
    );

    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index} />;
};

export default ProfileFeatureListCard;
