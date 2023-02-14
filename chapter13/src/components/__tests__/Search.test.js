import { act, fireEvent, render, waitFor } from "@testing-library/react";
// To check if that particular element is present in Document
import { toBeInTheDocument } from "@testing-library/jest-dom"
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Body from "../Body";
import { RESTAURANT_MOCK_DATA } from "../../../mocks/mockData";

// To mock fetch data
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_MOCK_DATA);
        }
    })
})

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    const shimmer = body.getByTestId("shimmer");
    // length of cards present in shimmer
    expect(shimmer.children.length).toBe(15);
})

test("Restaurant list should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    // To wait for data to load
    // In our case wait for shimmer to be gone
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const restaurantList = body.getByTestId("restaurant-list");
    // length of cards present in restuarant-list
    expect(restaurantList.children.length).toBe(15);
})

test("Search for string (pizza) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const input = body.getByTestId("search");
    // To fire an change event 
    await act(async () => {
        fireEvent.change(input, {
            target: {
                value: "pizza"
            }
        })
    })
    const searchBtn = body.getByTestId("search-btn")
    // To fire an click event
    await act(async () => {
        fireEvent.click(searchBtn);
    })
    const restaurantList = body.getByTestId("restaurant-list");
    // To check restaurant-list is update
    expect(restaurantList.children.length).toBe(4);
})
