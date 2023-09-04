import { Images } from '../resources/images';
import { RouteName } from '../routes/routeName';

export const featureList = [
    { title: 'Book Card', color: '#2C62FF', image: Images.bookcard, screenName: RouteName.BOOK_CARD },
    { title: 'Used Cards', color: '#2CC999', image: Images.Usedcard, screenName: RouteName.PAYMENT_DETAILS },
    { title: 'Pay', color: '#FAB41B', image: Images.payments, screenName: RouteName.PAYMENT_DETAILS },
    { title: 'Park My Car', color: '#FE5E5A', image: Images.ParkCar, screenName: RouteName.PAYMENT_DETAILS },
];

export const profileCardfeatureList = [
    {
        title: 'Payment',
        color: 'rgba(254, 216, 77, 0.2)',
        image: Images.payment,
        screenName: RouteName.PAYMENT_DETAILS,
    },
    {
        title: 'Payment History',
        color: 'rgba(254, 216, 77, 0.2)',
        image: Images.paymentHistory,
        screenName: RouteName.PAYMENT_DETAILS,
    },
    {
        title: 'Booking History',
        color: 'rgba(254, 216, 77, 0.2)',
        image: Images.bookingHistory,
        screenName: RouteName.PAYMENT_DETAILS,
    },
    {
        title: 'Privacy & Settings',
        color: 'rgba(254, 216, 77, 0.2)',
        image: Images.settings,
        screenName: RouteName.PAYMENT_DETAILS,
    },
    {
        title: 'Notifications',
        color: 'rgba(254, 216, 77, 0.2)',
        image: Images.profilenotification,
        screenName: RouteName.PAYMENT_DETAILS,
    },
    { title: 'Logout', color: 'rgba(254, 216, 77, 0.2)', image: Images.logout, screenName: RouteName.LOGIN },
];

export const transactionSelector = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Payment' },
    { id: 3, title: 'Recieved' },
];

export const bookSelector = [
    { id: 1, title: 'One-day', type: 'single' },
    { id: 2, title: 'Multi-day', type: 'multiple' },
];

export const TranasactionsHistory = [
    { name: 'Payment', transactionDate: '23-07-2023', image: Images.userAvatar, payment: 120, incoming: true },
    { name: 'Payment History', transactionDate: '23-07-2023', image: Images.userAvatar, payment: 120, incoming: true },
    { name: 'Booking History', transactionDate: '23-07-2023', image: Images.userAvatar, payment: 120, incoming: true },
    {
        name: 'Privacy & Settings',
        transactionDate: '23-07-2023',
        image: Images.userAvatar,
        payment: 120,
        incoming: true,
    },
    { name: 'Notifications', transactionDate: '23-07-2023', image: Images.userAvatar, payment: 120, incoming: true },
    { name: 'Logout', transactionDate: '23-07-2023', image: Images.userAvatar, payment: 120, incoming: true },
];

export const UserList = [
    { id: 1, name: 'Chanchal', image: Images.userAvatar },
    { id: 2, name: 'Sumeet', image: Images.userAvatar },
    { id: 3, name: 'Tom', image: Images.userAvatar },
    {
        id: 4,
        name: 'Girish',
        image: Images.userAvatar,
    },
    { id: 5, name: 'Harsha', image: Images.userAvatar },
    { id: 6, name: 'Ali', image: Images.userAvatar },
];
