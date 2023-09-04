// import { SecureStorageKey, SecureUtils } from '../utils/secureStorage';
// import { useAppSelector } from './redux';
// import { get } from 'lodash';
// import { useEffect, useState } from 'react';
// import { store } from '../store';
// import { LoginActions } from '../features/login';

// interface LoggedInData {
//     // Define the structure of your logged-in data here
//     user: {};
//     // Add other properties as needed
// }

// // Example list of available cards
// const availableCards: Card[] = [
//     { id: 1, name: 'Card 1' },
//     { id: 2, name: 'Card 2' },
//     { id: 3, name: 'Card 3' },
//     { id: 4, name: 'Card 4' },
//     { id: 5, name: 'Card 5' },
// ];

// function isBookingTimeValid(bookingStartTimeUTC, bookingEndTimeUTC) {
//     // Convert UTC strings to Date objects
//     const bookingStart = new Date(bookingStartTimeUTC);
//     const bookingEnd = new Date(bookingEndTimeUTC);

//     // Get the current UTC time
//     const currentTime = new Date();

//     // Check if the current time is within the booking time range
//     if (currentTime >= bookingStart && currentTime <= bookingEnd) {
//         return true; // Current time is within the booking range
//     } else {
//         return false; // Current time is outside the booking range
//     }
// }

// const filterAvailableCards = (bookedCards: Card[]) => {
//     const currentDate = new Date(); // Get the current date and time
//     const currentHour = currentDate.getHours(); // Get the current hour

//     // Filter the available cards to exclude cards with matching ids in bookedCards
//     const filteredAvailableCards = availableCards.filter(
//         (card) =>
//             !bookedCards.find((bookedCard) => bookedCard.cardId === card.id) &&
//             isBookingTimeValid(bookedCard.startDate, bookedCard.endDate),
//     );

//     return filteredAvailableCards.length;
// };

// const usedCards = () => {
//     const [availableCards, setAvailableCard] = useState(5);
//     const dashboardData = useAppSelector((state) => state.dashBoard);
//     const currentBooking = get(dashboardData, 'data');
//     console.log('currentBooking', currentBooking);

//     // const isLoading = useAppSelector((state) => state.dashBoard);
//     // const logOut = () => store.dispatch(LoginActions.clear());

//     const getUsedCards = () => {
//         let availableCard = 5;
//         const bookings = currentBooking != undefined && currentBooking != null && currentBooking.length;
//         if (bookings.length != 0) {
//             filterAvailableCards(bookings);
//             // setAvailableCard(availableCard);
//         } else setAvailableCard(availableCard);
//     };

//     // useEffect(() => {
//     //     getUsedCards(currentBooking);
//     // }, []);

//     return { availableCards };
// };

// export default usedCards;
