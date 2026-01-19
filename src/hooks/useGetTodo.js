import { useEffect, useState } from "react";

const useGetTodo = (todoId) => {
    const [todo, setTodo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
                const data = await response.json();

                setTodo(data);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodo();
    }, [todoId]);

    return [todo, setTodo, isLoading, isError];
};

export default useGetTodo;