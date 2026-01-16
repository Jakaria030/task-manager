import { useEffect, useState } from "react";
import { LIMIT } from "../utils/utils";

const useGetTodos = (pageNo) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setIsLoading(true);
                const start = pageNo * LIMIT;
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${LIMIT}`);
                const data = await response.json();

                setTodos(data);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, [pageNo]);

    return [todos, setTodos, isLoading, isError];
};

export default useGetTodos;
