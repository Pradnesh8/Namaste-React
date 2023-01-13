import { CDN_IMG_URL } from "../config";

// Object is props received from parent and destructuring it to get values
const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    slaString
}) => {
    return (
        <div className="restaurant-card">
            <img src={`${CDN_IMG_URL}${cloudinaryImageId}`} alt="restauarant image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{slaString}</h4>
        </div>
    )
}
export default RestaurantCard;