
const Badges = ({ isCompleted, handleStatus, id }) => {
    return (
        isCompleted ? (<button className="px-6 py-[1px] rounded-full text-sm bg-green-500 text-gray-800">DONE</button>) : (<button onClick={(e) => { e.stopPropagation(); handleStatus(id); }} className="px-6 py-[1px] cursor-pointer rounded-full text-sm bg-yellow-500 text-gray-800" title="Mark it DONE">PENDING</button>)
    )
};

export default Badges;