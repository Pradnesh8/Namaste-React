import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
// Coding Assignment:
//  Add Shimmer Effect without installing a library
//  Install react - router - dom
//  Create a appRouter and Provide it to the app
//  Create a Home, About, Contact Page with Link(use child routes)
//  Make a Error page for routing errors
//  Create a Restaurant Page with dynamic restaurant ID
//  (Extra) - Create a login Page using Formik Library



const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
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
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing RouterProvider as Element with router object as props
root.render(<RouterProvider router={appRouter} />);