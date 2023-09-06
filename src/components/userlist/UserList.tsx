import React, { useState } from 'react';
import { Container, Image, ImageContainer } from './UserList.Style';
import { FlatList, View } from 'react-native';
import { Spacer, Text } from '../../components';
import { Images } from '../../resources/images';
import { UserListCardItem, UserListListCardProps } from './type';
const UserListCard: React.FC<UserListListCardProps> = ({ data, onPress }) => {
    const settleUsers = data.filter((user) => user.amountToSettle > 0);
    const [selectedId, setSelectedId] = useState<number>();

    const _onSelectUser = (param: UserListCardItem) => {
        setSelectedId(param.user.id);
        onPress(param);
    };
    const renderItem = ({ item }: { item: UserListCardItem }) => {
        const isSelected = item.user.id === selectedId;

        return (
            <View>
                <Spacer size='sm' />
                <Container onPress={() => _onSelectUser(item)}>
                    <ImageContainer isSelected={isSelected}>
                        <Image source={Images.userAvatar} resizeMode='contain' />
                    </ImageContainer>
                    <Spacer size='xs' />
                    <Text variant='title' style={{ fontSize: 14 }}>
                        {item.user.name}
                    </Text>
                    <Spacer size='xs' />
                </Container>
                <Spacer size='sm' />
            </View>
        );
    };

    return <FlatList data={settleUsers} renderItem={renderItem} keyExtractor={(item, index) => index} horizontal />;
};

export default UserListCard;
