import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL, REST_DATA_API_URL } from './../config';
import starIcon from './../../assets/star-icon.png';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const RestaurantDetails = () => {
    const { id } = useParams();
    const [restData, setRestData] = useState();
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items)
    async function getRestaurantInfo() {
        const data = await fetch(`${REST_DATA_API_URL}${id}`)
        const json = await data.json();
        console.log("data", json)
        setRestData(json.data);
    }
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const addToCart = (item) => {
        dispatch(addItem(item))
    }

    const removeFromCart = (item) => {
        dispatch(removeItem(item.id))
    }
    // return null when data is not present
    if (!restData) {
        return null;
    }
    return (
        // TODO : SEARCH box
        // TODO : pages
        // TODO : veg/nonveg icon
        // TODO : sort by price/category
        <div className="flex items-start">
            <img className="h-[85vh] w-auto ml-5 flex-1 object-cover" src={CDN_IMG_URL + restData?.cloudinaryImageId} alt={restData?.name} />
            <div className="ml-8 flex-1">
                <div className="text-2xl font-medium">
                    {restData?.name}
                </div>
                <div className="font-normal">
                    {new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(restData?.cuisines)}
                </div>
                <div className="flex items-center gap-2 mb-2.5 font-medium">
                    <div className="flex items-center gap-1">
                        <img src={starIcon} alt="star-icon" className="h-5" /> {restData?.avgRating}
                    </div>
                    <div className="cost-for-two">
                        {restData?.costForTwoMsg}
                    </div>
                </div>
                <div className="text-xl font-medium">Menu</div>
                <div className="max-h-[70vh] overflow-y-auto">
                    {Object.values(restData?.menu?.items)?.map((menu_item) => {
                        return (
                            <div className="flex justify-between my-1 items-center" key={menu_item.id}>
                                <div className="item-name">
                                    {menu_item.name}
                                </div>
                                <div className="pr-4 flex gap-4 items-center">
                                    <span>
                                        ₹{menu_item.price / 100}
                                    </span>

                                    {
                                        cartItems.find(({ id }) => id === menu_item.id)
                                            ?
                                            <div className="flex gap-2">
                                                <span className="cursor-pointer" onClick={() => removeFromCart(menu_item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span>{cartItems.find(({ id }) => id === menu_item.id).count}</span>
                                                <span className="cursor-pointer" onClick={() => addToCart(menu_item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </div>
                                            :
                                            <span className="bg-green-300 py-1 px-2 rounded-md">
                                                <button onClick={() => addToCart(menu_item)}>Add</button>
                                            </span>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetails;