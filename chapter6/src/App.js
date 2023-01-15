import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

// Coding Assignment:
//  Play with the useEffect Hook to see when it is called ? (before or after render)
//  Play with dependency array in useEffect Hook
//  Play with the developer console by putting a debugger in render and useEffect
//  Call an actual API to get data
//  Handle Error in your API call
//  Build Shimmer UI when data in not loaded
//  Render your UI with actual API data
//  Make Search functionality work
//  Make a Login <-> Logout button which toggles with a state

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);