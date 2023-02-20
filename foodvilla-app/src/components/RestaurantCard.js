import { Link } from "react-router-dom";
import { CDN_IMG_URL } from "../config";

// Object is props received from parent and destructuring it to get values
const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    slaString
}) => {
    return (
        <div className="h-fit w-72 shadow-sm">
            <img className="h-56 w-[100%] object-cover object-center" src={`${CDN_IMG_URL}${cloudinaryImageId}`} alt="restauarant image" />
            <h2 className="text-xl font-medium pt-2 pl-1">{name}</h2>
            <h3 className="pl-1 font-normal">{cuisines.join(", ")}</h3>
            <h4 className="text-sm pl-1 font-thin pb-2">{slaString}</h4>
        </div>
    )
}
export default RestaurantCard;