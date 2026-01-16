export const TOTAL_PAGE = 10;
export const LIMIT = 20;

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

export const debounce = (fn, delay) => {
    let timeout;

    return (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    }
};


export const handleFilterData = (todos, setTodos, searchText) => {
    const filterTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchText.toLowerCase()));

    setTodos(filterTodos);
}