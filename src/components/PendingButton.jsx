
const PendingButton = () => {
    return <button onClick={(e) => { e.stopPropagation(); }} className="px-6 py-[1px] cursor-pointer rounded-full text-sm bg-yellow-500 text-gray-800" title="Make it DONE">PENDING</button>;
};

export default PendingButton;