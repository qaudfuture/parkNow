export type AddPaymentProps = {
    userId: number;
};

export type AddPaymentPayload = {
    id: number;
    amount: number;
    date: Date;
    payerUserId: number;
    createdDate: Date;
    modifiedDate: Date;
};
