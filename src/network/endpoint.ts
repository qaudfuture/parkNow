export const END_POINTS = {
    LOGIN: 'api/Auth/login',
    REGISTRATION: 'v1/api/Users',
    TOKEN_REFRESH: '/auth/refresh',

    CARD_BOOKING: (startDate, EndDate) => `/v1/api/ParkingCard/ParkingCardsAvailable/${startDate}/${EndDate}`,

    // TOP_STORIES: (key = 'science') => `/topstories/v2/${key}.json?api-key=${NETWORK_CONST.API_KEY}`,
    // STORY_COMMENTS: '/community-api-product/1/overview',
    // STORY_SEARCH: (search: string, page = 1) =>
    //     `/search/v2/articlesearch.json?q=${search}&page=${page}&api-key=${NETWORK_CONST.API_KEY}`,
};
