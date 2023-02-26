import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
const About = lazy(() => import('./components/About'));
const Checkout = lazy(() => import('./components/Checkout'));
const Contact = lazy(() => import('./components/Contact'));
// import About from './components/About';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import RestaurantDetails from './components/RestaurantDetails';
import Error from './components/Error';
import Login from './components/Login';
import Shimmer from './components/Shimmer';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';
import Scrolltotop from './components/Scrolltotop';

const AppLayout = () => {
    return (
        <>
            <Scrolltotop />
            <div className='min-h-screen'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

// Creating routing object
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        // Children will render in <Outlet> component
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/info/:id',
                element: <RestaurantDetails />,
                errorElement: <Error />,
            },
            {
                path: '/about',
                element: (
                    // The lazy loaded import (dynamic import) must be wrapped with Suspense
                    // fallback is the UI code or the text needs to be shown while loading component
                    <Suspense fallback={<h1>Loading ...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element: (<Suspense fallback={<h1>Loading ...</h1>}>
                    <Contact />
                </Suspense>)
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkout',
                element: (
                    <Suspense fallback={<Shimmer type="checkout" />}>
                        <Checkout />
                    </Suspense>
                )
            }
        ],
    },
    {
        path: '/login',
        element: <Login />
    }
])

const App = () => {
    const [user, setUser] = useState({});
    return (
        //Provider for userContext so that any component inside it can consume it
        <Provider store={store}>
            <userContext.Provider value={{ user, setUser }}>
                <RouterProvider router={appRouter} />
            </userContext.Provider>
        </Provider>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing RouterProvider as Element with router object as props
root.render(<App />);