
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import emptycart from '../../assets/emptycart.png';
const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(addItem(item))
    }

    const removeFromCart = (item) => {
        dispatch(removeItem(item.id))
    }

    return (
        <div className="m-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            {
                cartItems.length > 0 ?
                    <div className="px-4 mt-2 min-h-[80vh]">
                        {
                            cartItems.map((item) => {
                                return (
                                    <div className="flex gap-4 justify-between">
                                        <span>{item.name}</span>

                                        <div className="flex gap-2">
                                            <span className="pr-4">₹ {item.price / 100}</span>
                                            <span className="cursor-pointer" onClick={() => removeFromCart(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span>{item.count}</span>
                                            <span className="cursor-pointer" onClick={() => addToCart(item)}>
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
                    :
                    <div className="flex flex-col items-center min-h-[80vh]">
                        <img src={emptycart} className="w-[80vh]" alt="empty-cart" />
                        <h1 className="text-xl font-light">
                            Your cart is empty
                        </h1>
                    </div>


            }
        </div>
    )
}

export default Cart;