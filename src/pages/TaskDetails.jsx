import { useParams } from "react-router";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import Badges from "../components/Badges.jsx";
import LoadingSpin from "../components/LoadingSpin.jsx";
import { getRandomNumber } from "../utils/utils.js";
import NotFoundTodo from "../components/NotFoundTodo.jsx";
import useTheme from "../hooks/useTheme.js";
import useGetTodo from "../hooks/useGetTodo.js";

const images = [image1, image2, image3, image4, image5];


const TaskDetails = () => {
    const { theme } = useTheme();
    const { todoId } = useParams();
    const [todo, setTodo, isLoading, isError] = useGetTodo(todoId);

    if (isLoading) {
        return <LoadingSpin />;
    }

    const handleStatus = (id) => {
        setTodo({
            ...todo,
            completed: true
        });
    }

    return (
        <section className={`${theme === "light" ? "bg-white" : "bg-[#242424]"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 my-12 ">
                {
                    (isError || !todo) ?
                        (
                            <NotFoundTodo message="Todo Not Found!" />
                        ) : (
                            <div className={`${theme === "light" ? "bg-white" : "bg-[#292929]"} max-w-3xl mx-auto rounded-lg shadow-md text-center space-y-4 pb-8`}>
                                <img className="w-full h-[500px] border border-gray-100 rounded-t-lg" src={images[getRandomNumber(0, 5)]} alt="Task Details" />
                                <div className="size-12 bg-violet-500 rounded-full border border-violet-500 text-white flex items-center justify-center justify-self-center font-bold">{todo.id}</div>
                                <h6 className={`${theme === "light" ? "text-gray-800" : "text-white"} text-md text-center font-meium`}>{todo.title}</h6>
                                <Badges isCompleted={todo.completed} id={todo.id} handleStatus={handleStatus} />
                            </div>
                        )
                }
            </div>
        </section>
    )
};

export default TaskDetails;