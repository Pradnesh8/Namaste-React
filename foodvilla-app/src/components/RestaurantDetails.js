import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL, REST_DATA_API_URL } from '../config';
import starIcon from './../../assets/star-icon.png';
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItem, decrementItem, removeItem } from "../utils/cartSlice";
import Cart from "./Cart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const RestaurantDetails = () => {
    const { id } = useParams();
    const [restData, setRestData] = useState();
    const [menuData, setMenuData] = useState([]);
    const [filterMenueData, setFilterMenuData] = useState([]);
    const [searchMenu, setSearchMenu] = useState("");
    const [isVegFlag, setIsVegFlag] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items)
    async function getRestaurantInfo() {
        const data = await fetch(`${REST_DATA_API_URL}${id}`)
        const json = await data.json();
        setRestData(json.data);//Object.values(restData?.menu?.items)
        setMenuData(Object.values(json.data?.menu?.items));
        setFilterMenuData(Object.values(json.data?.menu?.items));
    }
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const addToCart = (item) => {
        dispatch(addItem(item))
    }

    const incrementCount = (item) => {
        dispatch(incrementItem(item))
    }

    const removeFromCart = (item) => {
        (cartItems.find(({ id }) => id === item.id).count > 1) ? dispatch(decrementItem(item)) : dispatch(removeItem(item.id))
    }

    const HandleSearchMenu = (e) => {
        setSearchMenu(e.target.value);
        const filteredMenu = menuData?.filter(menu_item => menu_item?.name?.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilterMenuData(filteredMenu);
    }

    const HandleVegOnlyToggle = () => {
        if (isVegFlag) {
            setFilterMenuData(menuData);
        } else {
            const filteredMenu = menuData?.filter(menu_item => menu_item?.isVeg);
            setFilterMenuData(filteredMenu);
        }
        setIsVegFlag(!isVegFlag);
    }
    // return null when data is not present
    if (!restData) {
        return <Shimmer type={"menu"} />
    }
    return (
        // TODO : SEARCH box
        // TODO : pages
        // TODO : veg/nonveg icon
        // TODO : sort by price/category
        /**
         *  background: #A1FFCE;  
         *  background: -webkit - linear - gradient(to right, #FAFFD1, #A1FFCE);  
         *  background: linear - gradient(to right, #FAFFD1, #A1FFCE); 
         */
        <div className="flex items-start w-full min-h-[90vh]">
            {/* Restaurant preview */}
            <div className="flex-1 flex flex-col min-h-[87vh] justify-center items-center gap-3 bg-[#A1FFCE] m-2 relative">
                <Link to="/" className="absolute top-[2%] flex w-full justify-start pl-3">
                    <span className="border bg-[#FAFFD1] p-1.5 rounded-md flex gap-1 items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                    </svg>
                        <span>back</span>
                    </span>
                </Link>
                <img className="h-72 w-auto p-1 object-cover rounded-md" src={CDN_IMG_URL + restData?.cloudinaryImageId} alt={restData?.name} />
                <div className="flex flex-col items-center">
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
                </div>
            </div>
            {/* Restaurant Menu */}
            <div className="flex-[1.5] m-1">
                <div className="flex items-center justify-between p-4 border-b-2" >
                    <span className="text-2xl font-medium" data-testid="menu">
                        Menu
                    </span>

                    <span className="flex items-center">
                        <span className="flex items-center mr-2">
                            <input id="default-checkbox" type="checkbox" className="w-5 h-5 accent-green-500 " checked={isVegFlag} onChange={HandleVegOnlyToggle} />
                            <label htmlFor="default-checkbox" className="ml-2 text-base">Veg only</label>
                        </span>
                        <input className="w-72 border border-black p-1 rounded-md font-normal text-base pr-[2rem]" placeholder="Search dish" onChange={HandleSearchMenu} value={searchMenu} />
                        <span className="ml-[-2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </span>
                </div>
                <div className="max-h-[80vh] overflow-y-auto menu pl-2">
                    {
                        (filterMenueData.length === 0 && searchMenu.length > 0) &&
                        <h1 className="text-center text-red-400 p-5">
                            We couldn’t find any items matching your search. <br />Please try a new keyword.
                        </h1>
                    }
                    {filterMenueData?.map((menu_item) => {
                        return (
                            <div className="flex justify-between gap-1 my-2 items-center" key={menu_item.id}>
                                <div className="item-name flex items-center gap-2">
                                    {
                                        menu_item.isVeg ?
                                            <span className=" h-4 w-4 border border-green-400 flex justify-center items-center">
                                                <span className="h-2 w-2 p-1 rounded-full bg-green-400"></span>
                                            </span> :
                                            <span className="h-4 w-4 border border-red-400 flex justify-center items-center">
                                                <span className="h-2 w-2 p-1 rounded-full bg-red-400"></span>
                                            </span>
                                    }
                                    <div className="flex justify-start gap-1 items-center">
                                        <span>
                                            {menu_item.name}
                                        </span>
                                        {
                                            menu_item.isBestSeller && <span className="font-light text-xs border px-[0.3rem] py-[0.1rem] rounded-full bg-[#FAFFD1]">Bestseller</span>
                                        }
                                    </div>
                                </div>
                                <div className="pr-4 flex gap-4 items-center">
                                    <span>
                                        ₹{menu_item.price / 100}
                                    </span>

                                    {
                                        cartItems.find(({ id }) => id === menu_item.id)
                                            ?
                                            <div className="flex gap-2 py-1">
                                                <span className="cursor-pointer" onClick={() => removeFromCart(menu_item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span>{cartItems.find(({ id }) => id === menu_item.id).count}</span>
                                                <span className="cursor-pointer" onClick={() => incrementCount(menu_item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </div>
                                            :
                                            <span className="bg-green-200 py-1 px-2 rounded-md">
                                                <button className="text-sm" onClick={() => addToCart(menu_item)} data-testid="addMenuItem">Add</button>
                                            </span>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Cart preview */}
            <div className="sideCart flex-1 flex flex-col min-h-[87vh] justify-start items-center gap-3 m-2 bg-[#FAFFD1]">
                <div className="flex items-center justify-between p-2" >
                    <div className="h-full">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetails;