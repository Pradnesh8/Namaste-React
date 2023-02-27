const RestaurantListShimmer = () => {
    return (
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
    )
}
const RestaurantNextListShimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-24" data-testid="shimmer">
            {
                Array(16).fill("").map((elem, index) =>
                    <div key={index} className="h-60 w-72 bg-gray-200 animate-pulse">
                    </div>
                )
            }
        </div>
    )
}

const RestaurantMenuShimmer = () => {
    return (
        <>
            <div className="flex items-start w-full min-h-[90vh] gap-2">
                <div className="flex flex-col flex-[70%] w-full min-h-[87vh] gap-1">
                    <div className="h-[30vh] bg-gray-200 animate-pulse"></div>
                    <div className="h-[10vh] bg-gray-200 animate-pulse"></div>
                    <div className="h-[60vh] flex flex-wrap justify-around">
                        <div className="flex justify-between m-2 gap-1 items-center w-[40%] border shadow-md bg-gray-200 animate-pulse">
                        </div>
                        <div className="flex justify-between m-2 gap-1 items-center w-[40%] border shadow-md bg-gray-200 animate-pulse">
                        </div>
                        <div className="flex justify-between m-2 gap-1 items-center w-[40%] border shadow-md bg-gray-200 animate-pulse">
                        </div>
                        <div className="flex justify-between m-2 gap-1 items-center w-[40%] border shadow-md bg-gray-200 animate-pulse">
                        </div>
                        <div className="flex justify-between m-2 gap-1 items-center w-[40%] border shadow-md bg-gray-200 animate-pulse">
                        </div>
                        <div className="flex justify-between m-2 gap-1 items-center w-[40%] border shadow-md bg-gray-200 animate-pulse">
                        </div>
                    </div>
                </div>
                <div className="flex-[30%] min-h-[87vh] w-full bg-gray-200 animate-pulse">
                </div>
            </div>
            {/* <div className="flex items-start w-full min-h-[90vh]">
                <div className="flex-1 flex flex-col min-h-[87vh] justify-center items-center gap-3 bg-gray-200 animate-pulse m-2">
                </div>
                <div className="flex-[1.5] min-h-[100vh] flex flex-col">
                    <div className="bg-gray-200 animate-pulse m-1 flex-[0.1]">
                    </div>
                    <div className="bg-gray-200 animate-pulse flex-[0.8]">
                    </div>
                </div>
                <div className="sideCart flex-1 flex flex-col min-h-[87vh] justify-start items-center gap-3 m-2 bg-gray-200 animate-pulse">
                </div>
            </div> */}
        </>
    )
}
const Shimmer = ({ type }) => {
    const renderSwitch = (param) => {
        switch (param) {
            case "restaurant-list":
                return <RestaurantListShimmer />
            case "menu":
                return <RestaurantMenuShimmer />
            case "restaurant-next-list":
                return <RestaurantNextListShimmer />
        }
    }
    return (
        <>
            {renderSwitch(type)}
        </>
    )
}

export default Shimmer;