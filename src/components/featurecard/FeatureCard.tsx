// List.tsx
import React from 'react';
import { FlatList } from 'react-native';
import { StyledListItem, Image } from './FeatureCard.style';
import { Text, Spacer } from '../../components';
import { ListItemProps, ListItemPropsCardProps } from './type';

const FeatureListCard: React.FC<ListItemPropsCardProps> = ({ data, onPress }) => {
    const renderItem = ({ item }: { item: ListItemProps }) => (
        <StyledListItem color={item.color} onPress={() => onPress(item.screenName)}>
            <Image source={item.image} />
            <Spacer size='sm' />
            <Text variant='body' style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>
                {item.title}
            </Text>
        </StyledListItem>
    );
    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.title} horizontal />;
};

export default FeatureListCard;
