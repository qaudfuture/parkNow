import React, { useState } from 'react';
import { Container, Image, ImageContainer } from './UserList.Style';
import { FlatList, View } from 'react-native';
import { Spacer, Text } from '../../components';
import { UserListCardItem, UserListListCardProps } from './type';
const UserListCard: React.FC<UserListListCardProps> = ({ data, onPress }) => {
    const [selectedId, setSelectedId] = useState<number>();

    const _onSelectUser = (param: UserListCardItem) => {
        setSelectedId(param.id);
        onPress(param);
    };
    const renderItem = ({ item }: { item: UserListCardItem }) => {
        const isSelected = item.id === selectedId;
        return (
            <View>
                <Spacer size='sm' />
                <Container onPress={() => _onSelectUser(item)}>
                    <ImageContainer isSelected={isSelected}>
                        <Image source={item.image} resizeMode='contain' />
                    </ImageContainer>
                    <Spacer size='xs' />
                    <Text variant='title' style={{ fontSize: 14 }}>
                        {item.name}
                    </Text>
                    <Spacer size='xs' />
                </Container>
                <Spacer size='sm' />
            </View>
        );
    };

    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index} horizontal />;
};

export default UserListCard;
