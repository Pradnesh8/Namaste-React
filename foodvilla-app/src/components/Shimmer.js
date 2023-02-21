const Shimmer = ({ type }) => {
    return (
        <>
            {
                type === "restaurant-list" &&

                <>
                    <div className="flex gap-2 justify-end m-8">
                        <div className="border w-72 p-3 rounded-md" name="search-shimmer" id="search-shimmer"> </div>
                        <button className="border px-8 py-5 bg-gray-200 rounded-md" data-testid="search-btn"></button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-24" data-testid="shimmer">
                        {
                            Array(15).fill("").map((elem, index) =>
                                <div key={index} className="h-60 w-72 bg-gray-200 animate-pulse">
                                </div>
                            )
                        }
                    </div>
                </>
            }
            {
                type === "menu" &&
                <>
                    <div className="flex items-start w-full min-h-[90vh]">
                        <div className="flex-1 flex flex-col min-h-[87vh] justify-center items-center gap-3 bg-gray-200 animate-pulse m-2">
                        </div>
                        <div className="flex-[1.5] min-h-[87vh] bg-gray-200 animate-pulse m-1">
                        </div>
                        <div className="sideCart flex-1 flex flex-col min-h-[87vh] justify-start items-center gap-3 m-2 bg-gray-200 animate-pulse">
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default Shimmer;