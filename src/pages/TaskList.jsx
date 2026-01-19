import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { debounce, handleFilterData, LIMIT, TOTAL_PAGE } from "../utils/utils.js";
import TodoCard from "../components/TodoCard.jsx";
import LoadingSkeleton from "../components/LoadingSkeleton.jsx";
import NotFoundTodo from "../components/NotFoundTodo.jsx";
import useGetTodos from "../hooks/useGetTodos.js";
import useTheme from "../hooks/useTheme.js";

const dSearch = debounce(handleFilterData, 500);

const TaskList = () => {
    const { theme } = useTheme();
    const [pageNo, setPageNo] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [todos, setTodos, isLoading, isError] = useGetTodos(pageNo);
    const [filterTodos, setFilterTodos] = useState(null);


    const handlePage = (value) => {
        setFilterTodos(null);
        setSearchText("");
        setPageNo((pageNo + value + TOTAL_PAGE) % TOTAL_PAGE);
    }


    if (isLoading) {

        return <LoadingSkeleton />;
    }

    const handleChangeText = async (e) => {
        const value = e.target.value;
        setSearchText(value);

        dSearch(todos, setFilterTodos, value);
    }

    const displayTodos = filterTodos || todos;

    return (
        <section className={`${theme === "light" ? "bg-white" : "bg-[#242424]"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 my-12">
                {/* search box */}
                <div className="my-12 flex items-center justify-between gap-4">
                    <h2 className={`${theme === "light" ? "text-gray-800" : "text-white"} text-2xl font-bold`}>All Tasks:</h2>
                    <input onChange={handleChangeText} className={`${theme === "light" ? "text-gray-800 border-gray-200 focus:outline focus:outline-violet-500" : "text-white"} border rounded-md p-2 `} value={searchText} type="search" placeholder="Search todos" />
                </div>
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