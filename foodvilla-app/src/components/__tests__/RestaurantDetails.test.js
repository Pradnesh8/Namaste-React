import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import Header from "../Header";
import UserContext from "../../utils/userContext";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_MENU_MOCK_DATA } from "../../../mocks/mockData";
import RestaurantDetails from "../RestaurantDetails";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_MENU_MOCK_DATA)
        }
    })
})

test("Add an item to cart from Restaurant menu and check cart items from header is changing", async () => {
    const restaurantDetails = render(
        <StaticRouter>
            <UserContext.Provider value={{ user: {}, setUser: () => { } }}>
                <Provider store={store}>
                    <Header />
                    <RestaurantDetails />
                    <Cart />
                </Provider>
            </UserContext.Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(restaurantDetails.getByTestId("menu")));
    const addMenuItem = restaurantDetails.getAllByTestId("addMenuItem");
    // To fire an click event
    fireEvent.click(addMenuItem[0]);
    fireEvent.click(addMenuItem[1]);

    const cartItems = restaurantDetails.getByTestId("cart-items");
    // To check restaurant-list is update
    expect(cartItems.innerHTML).toBe("Cart 2 - items ");

    await waitFor(() => expect(restaurantDetails.getByTestId("cart")));
    const cart = restaurantDetails.getAllByTestId("cart-item-card");
    expect(cart.length).toBe(2);
})