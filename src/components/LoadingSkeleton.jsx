
const LoadingSkeleton = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                Array(20).fill(0).map((_, indx) => {
                    return (
                        <div key={indx} className="h-36 animate-pulse p-4 rounded-lg shadow-sm flex flex-col gap-2 items-center space-y-5">
                            <div className="size-12 bg-gray-200 rounded-full"></div>
                            <div className="w-full h-[6px] bg-gray-200"></div>
                            <div className="w-[50%] h-[4px] bg-gray-200"></div>
                        </div>

                    );
                })
            }
        </div>
    )
};

export default LoadingSkeleton;