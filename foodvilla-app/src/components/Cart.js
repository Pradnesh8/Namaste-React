
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { removeItem, incrementItem, decrementItem } from "../utils/cartSlice";
import emptycart from '../../assets/emptycart.png';
import { CDN_IMG_URL } from "../config";
import { useNavigate, useMatch } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
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
const Cart = () => {
    const isCheckout = useMatch("/checkout");
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const incrementCount = (item) => {
        dispatch(incrementItem(item))
    }

    const removeFromCart = (item) => {
        (cartItems.find(({ id }) => id === item.id).count > 1) ? dispatch(decrementItem(item)) : dispatch(removeItem(item.id))
    }

    const emptyCart = () => {
        dispatch(clearCart())
    }

    const calculatePrice = () => {
        const price = cartItems.reduce((sum, item) => sum + item.count * (item.price === 0 ? item.defaultPrice / 100 : item.price / 100), 0);
        return parseFloat(price.toFixed(2));
    }

    return (
        <div className="m-2">
            {
                !isCheckout &&
                <div className="flex justify-between items-end">
                    <h1 className="text-3xl ml-3 font-bold" data-testid="cart">Cart</h1>
                    {
                        cartItems.length > 0 &&
                        <button className="mr-5 cursor-pointer text-red-600" onClick={emptyCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    }
                </div>
            }
            {
                cartItems.length > 0 ?
                    <>
                        <div className="px-4 mt-2 max-h-[60vh] overflow-y-auto menu">
                            {
                                cartItems.map((item) => {
                                    return (

                                        <div key={item.id} data-testid="cart-item-card" className="flex gap-4 justify-between items-center my-2 shadow-md bg-white">
                                            <Link to={`/info/${item.restId}`}>
                                                <div className="flex items-center">
                                                    <div className="h-fit relative">
                                                        {
                                                            item?.cloudinaryImageId ?
                                                                <ImageRenderer item={item} />
                                                                :
                                                                <div className="bg-gray-200 h-[5rem] w-[5rem] flex justify-center items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                        }
                                                        {
                                                            item.isVeg ?
                                                                <span className="absolute top-1 right-1 h-4 w-4 border border-green-400 flex justify-center items-center">
                                                                    <span className="h-2 w-2 p-1 rounded-full bg-green-400"></span>
                                                                </span> :
                                                                <span className="absolute top-1 right-1 h-4 w-4 border border-red-400 flex justify-center items-center">
                                                                    <span className="h-2 w-2 p-1 rounded-full bg-red-400"></span>
                                                                </span>
                                                        }

                                                    </div>
                                                    <div className="text-base font-semibold ml-1">
                                                        <span>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="flex gap-1 pr-2">
                                                <span className="pr-1">₹{item.price === 0 ? item.defaultPrice / 100 : item.price / 100}</span>
                                                <span className="cursor-pointer" onClick={() => removeFromCart(item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span>{item.count}</span>
                                                <span className="cursor-pointer" onClick={() => incrementCount(item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="min-h-32 flex flex-col gap-2 justify-around items-end p-5 w-full my-2 shadow-md text-xl font-bold">
                            <div className="flex">
                                <span>Items total :&nbsp;</span>
                                <span>
                                    ₹ {calculatePrice()}
                                </span>
                            </div>
                            {isCheckout &&
                                <>
                                    <div className="flex font-thin text-base text-gray-400">
                                        <span>Govt Taxes & Other Charges :&nbsp;</span>
                                        <span>₹ {Math.round(calculatePrice() * 0.05)}</span>
                                    </div>
                                    <div className="flex border-t-2">
                                        <span>To Pay :&nbsp;</span>
                                        <span>
                                            ₹ {(calculatePrice() + Math.round(calculatePrice() * 0.05)).toFixed(2)}
                                        </span>
                                    </div>
                                </>
                            }

                            {
                                !isCheckout && <button className="bg-green-400 px-6 py-2 rounded-md text-white" onClick={() => navigate('/checkout')}>Proceed to checkout</button>
                            }
                        </div>
                    </> :
                    <div className="flex flex-col items-center min-h-[80vh]">
                        <img src={emptycart} className="w-[80vh] mt-2" alt="empty-cart" />
                        <h1 className="text-xl font-light">
                            Your cart is empty
                        </h1>
                    </div>


            }
        </div >
    )
}

export default Cart;