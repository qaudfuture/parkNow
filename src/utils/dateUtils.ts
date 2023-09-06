export function getMonthDateAndDay(inputDate: string): { dayOfWeek: string; month: string; date: number } {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dateObject = new Date(inputDate);

    const dayOfWeek = daysOfWeek[dateObject.getDay()];
    const month = months[dateObject.getMonth()];
    const date = dateObject.getDate();

    return {
        dayOfWeek,
        month,
        date,
    };
}

export const formatattedTime = (utcDate) => {
    const currentDateInUTC = new Date(utcDate);

    // Get the hours, minutes, and seconds in UTC
    const hours = currentDateInUTC.getUTCHours();
    const minutes = currentDateInUTC.getUTCMinutes();
    // const seconds = currentDateInUTC.getUTCSeconds();

    // Format the time as a string with leading zeros
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
};

export const localTime = (datetime: string) => {
    const date = new Date(datetime);
    // Create a Date object
    const dateObject = new Date(date.toString());
    // Extract the time components
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    // const seconds = dateObject.getSeconds();

    // Determine whether it's AM or PM
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Format the time as a string (hh:mm:ss AM/PM)
    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')} ${amOrPm}`;
    return formattedTime;
};
