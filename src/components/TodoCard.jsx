import { useNavigate } from "react-router";
import Badges from "./Badges.jsx";

const TodoCard = ({ todo, todos, setTodos }) => {
    const navigate = useNavigate();

    const handleStatus = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: true,
                };
            } else {
                return todo;
            }
        });

        setTodos(updatedTodos);
    }

    return (
        <div onClick={() => { navigate(`/task-details/${todo.id}`) }} className="p-4 cursor-pointer rounded-lg shadow-sm flex flex-col gap-2 items-center hover:shadow-lg">
            <div className="size-12 bg-violet-500 rounded-full border border-violet-500 text-white flex items-center justify-center justify-self-center font-bold">{todo.id}</div>
            <h6 className="text-md text-center text-gray-800 font-meium flex-grow">{todo.title}</h6>
            <Badges isCompleted={todo.completed} id={todo.id} handleStatus={handleStatus} />
        </div>
    )
};

export default TodoCard;