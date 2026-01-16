import { useParams } from "react-router";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import Badges from "../components/Badges.jsx";
import { useEffect, useState } from "react";
import LoadingSpin from "../components/LoadingSpin.jsx";
import { getRandomNumber } from "../utils/utils.js";
import NotFoundTodo from "../components/NotFoundTodo.jsx";

const images = [image1, image2, image3, image4, image5];


const TaskDetails = () => {
    const { todoId } = useParams();
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

    if (isLoading) {
        return <LoadingSpin />;
    }

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 my-12 ">
                {
                    (isError || !todo) ?
                        (
                            <NotFoundTodo message="Todo Not Found!" />
                        ) : (
                            <div className="max-w-3xl mx-auto rounded-lg shadow-md text-center space-y-4 pb-8">
                                <img className="w-full h-[500px] border border-gray-100 rounded-t-lg" src={images[getRandomNumber(0, 5)]} alt="Task Details" />
                                <div className="size-12 bg-violet-500 rounded-full border border-violet-500 text-white flex items-center justify-center justify-self-center font-bold">{todo.id}</div>
                                <h6 className="text-md text-center text-gray-800 font-meium">{todo.title}</h6>
                                <Badges isCompleted={todo.completed} />
                            </div>
                        )
                }
            </div>
        </section>
    )
};

export default TaskDetails;