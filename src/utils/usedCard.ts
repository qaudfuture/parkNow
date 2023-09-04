// Example list of available cards
const availableCards: Card[] = [
    { id: 1, name: 'Card 1' },
    { id: 2, name: 'Card 2' },
    { id: 3, name: 'Card 3' },
    { id: 4, name: 'Card 4' },
    { id: 5, name: 'Card 5' },
];

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}

function isBookingTimeValid(bookingStartTimeUTC, bookingEndTimeUTC) {
    // Get the current local date and time in Dubai
    const currentLocalDateTime = addHours(new Date(), 4).toISOString();
    // Get the current UTC time
    console.log('currentTime', currentLocalDateTime, bookingStartTimeUTC, currentLocalDateTime, bookingEndTimeUTC);

    console.log('currentTime', currentLocalDateTime >= bookingStartTimeUTC, currentLocalDateTime <= bookingEndTimeUTC);

    // Check if the current time is within the booking time range
    if (currentLocalDateTime >= bookingStartTimeUTC && currentLocalDateTime <= bookingEndTimeUTC) {
        return true; // Current time is within the booking range
    } else {
        return false; // Current time is outside the booking range
    }
}

const filterAvailableCards = (bookedCards: Card[]) => {
    // const currentDate = new Date(); // Get the current date and time
    // const currentHour = currentDate.getHours(); // Get the current hour

    // Filter the available cards to exclude cards with matching ids in bookedCards
    const filteredAvailableCards = availableCards.filter(
        (card) =>
            bookedCards.length &&
            bookedCards != undefined &&
            bookedCards != null &&
            !bookedCards?.find(
                (bookedCard) =>
                    bookedCard.cardId == card.id && isBookingTimeValid(bookedCard.startDate, bookedCard.endDate),
            ),
    );

    return filteredAvailableCards.length;
};

export const getAvailableCards = (currentBooking) => {
    let availableCards = 5;
    console.log('currentBooking', currentBooking);

    const bookings = currentBooking != undefined && currentBooking.length;
    console.log('bookingsLENGTHH', bookings);

    if (bookings != 0) {
        console.log('FILERRBOKKIG', bookings);
        availableCards = filterAvailableCards(currentBooking);
        return availableCards;
        // setAvailableCard(availableCard);
    } else return availableCards;
};

export const cardsBoookedByMe = () => {};
