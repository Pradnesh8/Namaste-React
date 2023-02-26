import { Link } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import starIcon from "./../../assets/star-icon.png";
// Object is props received from parent and destructuring it to get values
const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    slaString,
    avgRating,
    promoted
}) => {
    return (
        <div className="h-fit w-72 relative rounded-md shadow-sm hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out">
            {promoted && <span className="bg-green-300 rounded-lg rounded-l-none font-bold p-2 text-xs absolute top-1 -left-1">PROMOTED</span>}
            <img className="h-56 w-[100%] object-cover object-center" src={`${CDN_IMG_URL}${cloudinaryImageId}`} alt="restauarant image" />
            <div className="px-1.5 pb-2.5">
                <h2 className="text-xl font-medium pt-2 pl-1">{name}</h2>
                <h3 className="pl-1 font-normal">{cuisines?.join(", ")}</h3>
                <div className="flex items-center gap-2">
                    <h4 className="flex items-center gap-1"><img src={starIcon} alt="star-icon" className="h-5" /> {avgRating}</h4>
                    <h4 className="text-base font-thin">{slaString} </h4>
                </div>
            </div>
        </div>
    )
}
export default RestaurantCard;