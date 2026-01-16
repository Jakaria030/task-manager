export const TOTAL_PAGE = 10;
export const LIMIT = 20;

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};