const Shimmer = () => {
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

export default Shimmer;