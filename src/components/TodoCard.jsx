import { useNavigate } from "react-router";
import PendingButton from "./PendingButton.jsx";

const TodoCard = ({ todo }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => { navigate(`/task-details/${todo.id}`) }} className="p-4 cursor-pointer rounded-lg shadow-sm flex flex-col gap-2 items-center hover:shadow-lg">
            <div className="size-12 bg-violet-500 rounded-full border border-violet-500 text-white flex items-center justify-center justify-self-center font-bold">{todo.id}</div>
            <h6 className="text-md text-center text-gray-800 font-meium flex-grow">{todo.title}</h6>
            <PendingButton isCompleted={todo.completed} />
        </div>
    )
};

export default TodoCard;