
import { useDispatch, useSelector } from "react-redux";
import { removeItem, incrementItem, decrementItem } from "../utils/cartSlice";
import emptycart from '../../assets/emptycart.png';
import { CDN_IMG_URL } from "../config";
const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const incrementCount = (item) => {
        dispatch(incrementItem(item))
    }

    const removeFromCart = (item) => {
        (cartItems.find(({ id }) => id === item.id).count > 1) ? dispatch(decrementItem(item)) : dispatch(removeItem(item.id))
    }

    const calculatePrice = () => {
        const price = cartItems.reduce((sum, item) => sum + item.count * (item.price / 100), 0)
        return parseFloat(price.toFixed(2));
    }

    return (
        <div className="m-2">
            <h1 className="text-3xl ml-3 font-bold" data-testid="cart">Cart</h1>
            {
                cartItems.length > 0 ?
                    <>
                        <div className="px-4 mt-2 max-h-[60vh] overflow-y-auto menu">
                            {
                                cartItems.map((item) => {
                                    return (
                                        <div key={item.id} data-testid="cart-item-card" className="flex gap-4 justify-between items-center my-2 shadow-md">
                                            <div className="flex items-center">
                                                <div className="h-fit relative">
                                                    {
                                                        item?.cloudinaryImageId ?
                                                            <img className=" h-[5rem] w-[5rem] object-cover object-center" src={CDN_IMG_URL + item.cloudinaryImageId} alt="dish-image" />
                                                            :
                                                            <div className="bg-gray-200 h-28 w-28"></div>
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
                                                <div className="text-base font-semibold ml-1">{item.name}</div>
                                            </div>
                                            <div className="flex gap-1 pr-2">
                                                <span className="pr-1">₹{item.price / 100}</span>
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
                        <div className="h-32 flex flex-col justify-around items-end p-5 w-full my-2 shadow-md text-xl font-bold">
                            <div>
                                Total : ₹ {calculatePrice()}
                            </div>
                            <button className="bg-green-400 px-6 py-2 rounded-md text-white">Proceed to checkout</button>
                        </div>
                    </> :
                    <div className="flex flex-col items-center min-h-[80vh]">
                        <img src={emptycart} className="w-[80vh] mt-2" alt="empty-cart" />
                        <h1 className="text-xl font-light">
                            Your cart is empty
                        </h1>
                    </div>


            }
        </div>
    )
}

export default Cart;