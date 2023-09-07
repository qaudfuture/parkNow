export const END_POINTS = {
    LOGIN: 'api/Auth/login',
    REGISTRATION: 'v1/api/Users',
    TOKEN_REFRESH: '/auth/refresh',
    BOOK_SLOTS: 'v1/api/ParkingCard',
    ADD_PAYMENT: '/v1/api/Payment',
    SETTLE_PAYMENT: 'v1/api/Payment/settleUp',
    TODAY_BOOKED_CARD: 'v1/api/ParkingCard/BookedParkingCard',

    CARD_BOOKING: (startDate, EndDate) => `v1/api/ParkingCard/ParkingCardsAvailable/${startDate}/${EndDate}`,
    GET_TRANSACTIONS: (userId: number) => `v1/api/Payment/transactions?userId=${userId}`,
    BOOKEDCARD_FOR_USER: (userId: number) => `v1/api/ParkingCard/BookedParkingCardForUser?userId=${userId}`,
    GET_SETTLEUP_LIST: (userId: number) => `v1/api/Payment/settleUp?userId=${userId}`,
};
