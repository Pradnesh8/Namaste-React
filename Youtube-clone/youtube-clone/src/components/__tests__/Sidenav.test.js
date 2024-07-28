import { render } from "@testing-library/react";
import Sidenav from "../Sidenav";
import { StaticRouter } from "react-router-dom/server";
import Store from "../../utils/Store";
import AppContext from "../../utils/AppContext";
import { Provider } from "react-redux";
test("check if sideNav is opened", () => {
    const theme = 'light'
    // Load Header
    const header = render(
        <StaticRouter>
            <AppContext.Provider value={{ theme: theme, setTheme: () => { } }}>
                <Provider store={Store}>
                    <Sidenav />
                </Provider>
            </AppContext.Provider>
        </StaticRouter>
    );
    // Check if logo is loaded
    const sectionDiv = header.getByTestId("sub-section");
    expect(sectionDiv.childElementCount).toBe(3);
})