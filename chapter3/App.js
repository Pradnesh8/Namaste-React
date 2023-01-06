import React from 'react';
import ReactDOM from 'react-dom/client';
const logo = require("./assets/logo.png");
const user = require("./assets/user.png");
// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const head1 = React.createElement(
    "h1",
    { key: "heading1" },
    "Assignment - without JSX"
);
const head2 = React.createElement(
    "h2",
    { key: "heading2" },
    "Namaste React"
);
const head3 = React.createElement(
    "h3",
    { key: "heading3" },
    "Laying the foundation"
);
const divContainer = React.createElement(
    "div",
    { className: "title", key: crypto.randomUUID() },
    [head1, head2, head3]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divContainer);

// Create the same element using JSX

const JSXcontainer = <div className='title' key={crypto.randomUUID()}>
    <h1 key={crypto.randomUUID()}>Assignment - Using JSX</h1>
    <h2 key={crypto.randomUUID()}>Namaste React</h2>
    <h3 key={crypto.randomUUID()}>Laying the foundation</h3>
</div>

// Create a functional component of the same with JSX
const HeadingComponent = () => {
    return (
        <div className='title' key={crypto.randomUUID()}>
            {/* {Pass attributes into the tag in JSX } */}
            <h1 key={crypto.randomUUID()} className='compStyle'>Assignment - Functional Component</h1>
            <h2 key={crypto.randomUUID()} style={{ color: "blue" }}>Namaste React</h2>
            <h3 key={crypto.randomUUID()}>Laying the foundation</h3>
        </div>
    )
}

//  Composition of Component(Add a component inside another)
const ComposedComponent = () => {
    return (
        <div style={{ flex: "100%" }} key={crypto.randomUUID()}>
            <h1 key={crypto.randomUUID()}>Composed Component Rendering JSX element and Function Component</h1>
            {JSXcontainer}
            <HeadingComponent key={crypto.randomUUID()} />
        </div>
    )
}

// Create a Header Component from scratch using Functional Components with JSX
// o Add a Logo on left
// o Add a search bar in middle
// o Add User icon on right
// o Add CSS to make it look nice
const HeaderComponent = () => {
    return (
        <div className='navbar' key={crypto.randomUUID()}>
            <img key={crypto.randomUUID()} src={logo} alt="Logo" id="logo" />
            <input key={crypto.randomUUID()} type="text" name="search" placeholder='Search ...' id="search-bar" />
            <img key={crypto.randomUUID()} src={user} alt="User Icon" id="user-icon" />
        </div>
    )
}


root.render([<HeaderComponent></HeaderComponent>, divContainer, JSXcontainer, <HeadingComponent key={crypto.randomUUID()} />, <ComposedComponent />]);