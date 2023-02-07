const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-24">
            {
                Array(15).fill("").map((elem, index) =>
                    <div key={index} className="h-60 w-72 bg-gray-200">
                    </div>
                )
            }
        </div>
    )
}

export default Shimmer;