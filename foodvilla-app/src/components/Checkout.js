import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
const Checkout = () => {
    return (
        <div className="m-4">
            <h1 className="text-3xl ml-3 font-bold" data-testid="checkout">Checkout</h1>
            <div className="flex gap-2">
                <div className="flex-[60%] mt-2">
                    <CheckoutForm />
                </div>
                <div className="flex-[40%]">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Checkout;