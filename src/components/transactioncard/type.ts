// Props interface for the AdvancedCard component
import { ImageSourcePropType } from 'react-native';

export interface TransactionCardListProps {
    name: string;
    transactionDate: string;
    image?: ImageSourcePropType;
    payment?: number;
    incoming?: boolean;
}

export interface TransactionCardProps {
    data: TransactionCardListProps[] | TransactionCardListProps;
}
