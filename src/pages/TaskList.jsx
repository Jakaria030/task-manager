import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router";

const TaskList = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 my-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {
                        Array(20).fill(0).map((_, indx) => {
                            return (
                                <div onClick={() => { navigate(`/task-details/${indx}`) }} key={indx} className="p-4 cursor-pointer rounded-lg shadow-sm text-center space-y-2 hover:shadow-lg">
                                    <div className="size-12 bg-violet-500 rounded-full border border-violet-500 text-white flex items-center justify-center justify-self-center font-bold">1</div>
                                    <h4 className="text-md text-center text-gray-800 font-meium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, pariatur.</h4>
                                    <button onClick={(e) => { e.stopPropagation(); }} className="px-6 py-[1px] cursor-pointer rounded-full text-sm bg-yellow-500 text-gray-800" title="Make it DONE">PENDING</button>
                                </div>

                            );
                        })
                    }
                </div>

                {/* pagination */}

                <div className="flex items-center justify-center gap-5 mt-12">
                    <button className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm"><BiSolidLeftArrow className="text-xl text-white" /> PREV</button>
                    <p className="w-32 text-center text-gray-800">PAGE NO: 1</p>
                    <button className="cursor-pointer px-4 py-1 bg-violet-500 flex items-center justify-between gap-2 text-white rounded-sm">NEXT <BiSolidRightArrow className="text-xl text-white" /></button>
                </div>
            </div>
        </section>
    )
};

export default TaskList;