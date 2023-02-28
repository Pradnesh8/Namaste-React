import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL, REST_DATA_API_URL } from '../config';
import starIcon from './../../assets/star-icon.png';
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItem, decrementItem, removeItem } from "../utils/cartSlice";
import Cart from "./Cart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const ImageRenderer = ({ item }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <div style={{ display: loading ? "block" : "none" }} className=" h-[5rem] w-[5rem] bg-gray-200 animate-pulse">
            </div>
            <div style={{ display: loading ? "none" : "block" }}>
                <img
                    className=" h-[5rem] w-[5rem] object-fill object-center"
                    src={CDN_IMG_URL + item?.cloudinaryImageId}
                    alt="dish-image"
                    onLoad={() => setLoading(false)}
                />
            </div>
        </>
    )
}
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
            <div className="flex flex-col flex-[70%] max-h-[87vh] overflow-y-auto menu">
                {/* Restaurant preview */}
                <div className="flex bg-[#A1FFCE] mt-2 relative justify-center">
                    <div className="absolute top-[2%] flex w-full justify-start pl-1">
                        <Link to="/" >
                            <span className="border bg-[#FAFFD1] p-1.5 rounded-md flex gap-1 items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                            </svg>
                                <span className="pr-2">back</span>
                            </span>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <img className="h-52 w-auto p-1 object-cover rounded-md" src={CDN_IMG_URL + restData?.cloudinaryImageId} alt={restData?.name} />
                        <div className="flex flex-col text-center items-center">
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
                </div>
                {/* Restaurant Menu */}
                <div className="m-1">
                    <div className="flex items-center justify-between p-4 border-b-2 sticky top-0 bg-white z-10" >
                        <span className="text-2xl font-bold pl-10" data-testid="menu">
                            Menu
                        </span>

                        <span className="flex items-center">
                            <span className="flex items-center mr-2">
                                <input id="default-checkbox" type="checkbox" className="w-5 h-5 accent-green-500 cursor-pointer" checked={isVegFlag} onChange={HandleVegOnlyToggle} />
                                <label htmlFor="default-checkbox" className="ml-2 text-base cursor-pointer">Veg only</label>
                            </span>
                            <input className="w-72 border border-black p-1 rounded-md font-normal text-base pr-[2rem]" placeholder="Search dish" onChange={HandleSearchMenu} value={searchMenu} />
                            <span className="ml-[-2rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div className="pl-2 flex flex-wrap justify-around gap-3 mt-3">
                        {
                            (filterMenueData.length === 0 && searchMenu.length > 0) &&
                            <h1 className="text-center text-red-400 p-5">
                                We couldn’t find any items matching your search. <br />Please try a new keyword.
                            </h1>
                        }
                        {filterMenueData?.map((menu_item) => {
                            return (
                                <div className="flex justify-between m-2 gap-1 items-center w-[44%] border shadow-md " key={menu_item.id}>
                                    <div className="item-name flex items-center gap-2">
                                        <div className="h-fit relative w-[5vw]">
                                            {
                                                menu_item?.cloudinaryImageId ?
                                                    <ImageRenderer item={menu_item} />
                                                    :
                                                    <div className="bg-gray-200 h-[5rem] w-[5rem] flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                            }
                                            {
                                                menu_item.isVeg ?
                                                    <span className="absolute top-1 right-1 h-4 w-4 border border-green-400 flex justify-center items-center">
                                                        <span className="h-2 w-2 p-1 rounded-full bg-green-400"></span>
                                                    </span> :
                                                    <span className="absolute top-1 right-1 h-4 w-4 border border-red-400 flex justify-center items-center">
                                                        <span className="h-2 w-2 p-1 rounded-full bg-red-400"></span>
                                                    </span>
                                            }
                                            {
                                                cartItems.find(({ id }) => id === menu_item.id)
                                                    ?
                                                    <div className="bottom-[-10%] absolute w-full flex justify-center">
                                                        <div className="flex gap-1 py-1 px-2 justify-center items-center w-fit bg-green-200">
                                                            <span className="cursor-pointer" onClick={() => removeFromCart(menu_item)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-sm">{cartItems.find(({ id }) => id === menu_item.id).count}</span>
                                                            <span className="cursor-pointer" onClick={() => incrementCount(menu_item)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="flex gap-1 py-1 justify-center bottom-[-18%] absolute w-full">
                                                        <span className="bg-green-200 py-[0.6] px-2" onClick={() => addToCart(menu_item)} data-testid="addMenuItem">
                                                            <button className="text-sm font-semibold">ADD</button>
                                                        </span>
                                                    </div>
                                            }
                                        </div>
                                        <div className="flex flex-col w-[18vw] justify-start gap-1">
                                            <span>
                                                {menu_item.name}
                                            </span>
                                            {
                                                menu_item.isBestSeller && <span className="font-light text-xs border px-[0.3rem] py-[0.1rem] rounded-full bg-[#FAFFD1] w-fit">Bestseller</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="pr-4 flex gap-4 items-center">
                                        <span>
                                            ₹{menu_item.price === 0 ? menu_item.defaultPrice / 100 : menu_item.price / 100}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* Cart preview */}
            <div className="sideCart flex flex-col min-h-[87vh] justify-start items-center gap-3 m-2 bg-[#FAFFD1] flex-[30%]">
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