import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

// Coding Assignment: 
//  Clean up your code
//  Create a Folder Structure for your app
//  Make different files for each Components
//  Create a config file
//  Use all types of import and export
//  Create a Search Box in your App
//  Use useState to create a variable and bind it to the input box
//  Try to make your search bar work

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