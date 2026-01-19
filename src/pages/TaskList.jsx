import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useMemo, useState } from "react";
import { TOTAL_PAGE } from "../utils/utils.js";
import TodoCard from "../components/TodoCard.jsx";
import LoadingSkeleton from "../components/LoadingSkeleton.jsx";
import NotFoundTodo from "../components/NotFoundTodo.jsx";
import useGetTodos from "../hooks/useGetTodos.js";
import useTheme from "../hooks/useTheme.js";
import SearchBox from "../components/SearchBox.jsx";

const TaskList = () => {
    const { theme } = useTheme();
    const [pageNo, setPageNo] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [todos, setTodos, isLoading, isError] = useGetTodos(pageNo);

    const handlePage = (value) => {
        setPageNo((pageNo + value + TOTAL_PAGE) % TOTAL_PAGE);
    }

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    const displayTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <section className={`${theme === "light" ? "bg-white" : "bg-[#242424]"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 my-12">
                {/* search box */}
                <SearchBox searchTerm={searchTerm} onSetSearchTerm={setSearchTerm} />
                {
                    (isError || displayTodos?.length === 0) ? (
                        <NotFoundTodo message="Todos Not Found!" />
                    ) : (
                        <>
                            {/* all tasks */}
                            < div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {
                                    displayTodos?.map((todo) => <TodoCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)
                                }
                            </div >
                        </>
                    )
                }
                {/* pagination */}
                <div className="flex items-center justify-center gap-5 mt-12">
                    <button onClick={() => handlePage(-1)} className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm"><BiSolidLeftArrow className="text-xl text-white" /> PREV</button>
                    <p className={`w-32 text-center  ${theme === "light" ? "text-gray-800" : "text-white"}`}>PAGE NO: {pageNo + 1}</p>
                    <button onClick={() => handlePage(1)} className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm">NEXT <BiSolidRightArrow className="text-xl text-white" /></button>
                </div>
            </div>
        </section>
    )
};

export default TaskList;