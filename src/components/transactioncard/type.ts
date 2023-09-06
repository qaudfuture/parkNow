// Props interface for the AdvancedCard component
import { ImageSourcePropType } from 'react-native';

export interface TransactionCardListProps {
    payedBy: string;
    transactionDate: string;
    image?: ImageSourcePropType;
    amount?: number;
    isPayment?: boolean;
}

export interface TransactionCardProps {
    data: TransactionCardListProps[] | TransactionCardListProps;
    loggedInUser: string;
}
