import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { LIMIT, TOTAL_PAGE } from "../utils/utils.js";
import TodoCard from "../components/TodoCard.jsx";
import LoadingSkeleton from "../components/LoadingSkeleton.jsx";
import NotFoundTodo from "../components/NotFoundTodo.jsx";

const TaskList = () => {
    const [pageNo, setPageNo] = useState(0);
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handlePage = (value) => {
        setPageNo((pageNo + value + TOTAL_PAGE) % TOTAL_PAGE);
    }

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

    if (isLoading) {

        return <LoadingSkeleton />;
    }

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 my-12">
                {
                    (isError || todos.length === 0) ? (
                        <NotFoundTodo message="Todos Not Found!" />
                    ) : (
                        <>
                            {/* all tasks */}
                            < div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {
                                    todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
                                }
                            </div >

                            {/* pagination */}
                            <div className="flex items-center justify-center gap-5 mt-12">
                                <button onClick={() => handlePage(-1)} className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm"><BiSolidLeftArrow className="text-xl text-white" /> PREV</button>
                                <p className="w-32 text-center text-gray-800">PAGE NO: {pageNo + 1}</p>
                                <button onClick={() => handlePage(1)} className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm">NEXT <BiSolidRightArrow className="text-xl text-white" /></button>
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    )
};

export default TaskList;