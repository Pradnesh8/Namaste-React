const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {
                Array(15).fill("").map((elem, index) =>
                    <div key={index} className="restaurant-card-loading">
                    </div>
                )
            }
        </div>
    )
}

export default Shimmer;