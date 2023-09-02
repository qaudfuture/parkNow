export interface TransactionListItem {
    id?: number;
    title: string;
}

export interface TransactionListItemProps {
    data: TransactionListItem[] | TransactionListItem;
    onPress: (param: TransactionListItem) => void;
}
