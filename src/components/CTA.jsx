import { useNavigate } from "react-router";

const CTA = ({ path = "/task-list", children }) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(path)} className="px-8 py-1.5 bg-violet-500 text-white text-lg rounded-sm cursor-pointer">
            {children}
        </button>
    )
};

export default CTA;