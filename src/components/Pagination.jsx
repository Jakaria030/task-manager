import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useTheme from "../hooks/useTheme.js";

const Pagination = ({ onHandlePage, pageNo }) => {
    const { theme } = useTheme();

    return (
        <div className="flex items-center justify-center gap-5 mt-12">
            <button onClick={() => onHandlePage(-1)} className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm"><BiSolidLeftArrow className="text-xl text-white" /> PREV</button>
            <p className={`w-32 text-center  ${theme === "light" ? "text-gray-800" : "text-white"}`}>PAGE NO: {pageNo + 1}</p>
            <button onClick={() => onHandlePage(1)} className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm">NEXT <BiSolidRightArrow className="text-xl text-white" /></button>
        </div>
    )
};

export default Pagination;