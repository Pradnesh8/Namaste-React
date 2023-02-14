import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import UserContext from "../../utils/userContext"
test("Logo should load on rendering Header", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <UserContext.Provider value={{ user: {}, setUser: () => { } }}>
                <Provider store={store}>
                    <Header />
                </Provider>
            </UserContext.Provider>
        </StaticRouter>
    );
    // Check if logo is loaded
    const logo = header.getByTestId("logo");
    expect(logo.src).toBe("http://localhost/logo.png");
});
test("Online status should be green", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <UserContext.Provider value={{ user: {}, setUser: () => { } }}>
                <Provider store={store}>
                    <Header />
                </Provider>
            </UserContext.Provider>
        </StaticRouter>
    );
    // Check if logo is loaded
    const status = header.getByTestId("online-status");
    expect(status.innerHTML).toBe("🟢");
});
test("Cart should not have - n items", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <UserContext.Provider value={{ user: {}, setUser: () => { } }}>
                <Provider store={store}>
                    <Header />
                </Provider>
            </UserContext.Provider>
        </StaticRouter>
    );
    // Check if Cart-items is loaded
    const cart = header.getByTestId("cart-items");
    expect(cart.innerHTML).toBe("Cart ");
});