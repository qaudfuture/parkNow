import React, { useState } from 'react';
import { Container } from './TransactionSelector.style';
import { FlatList } from 'react-native';
import { Text } from '../../components';
import { TransactionListItemProps, TransactionListItem } from './type';

const TransactionSelector: React.FC<TransactionListItemProps> = ({ data, onPress }) => {
    const [selectedId, setSelectedId] = useState<number>(data[0].id);
    const _onPressCard = (param: TransactionListItem) => {
        setSelectedId(param.id);
        onPress(param);
    };

    const renderItem = ({ item }: { item: TransactionListItem }) => {
        const isSelected = item.id === selectedId;
        return (
            <Container onPress={() => _onPressCard(item)} color={isSelected ? '#FED94D' : null} isSelected={true}>
                <Text variant='title' style={{ fontSize: 14, padding: 10 }}>
                    {item.title}
                </Text>
            </Container>
        );
    };
    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index} horizontal />;
};

export default TransactionSelector;
