import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", { id: "title-1", style: { color: "blue" }, className: "heading", key: "title1" }, "Namaste React");
// All elements are basically Objects
console.log(heading);

const heading2 = React.createElement("h2", { id: "title-2", style: { color: "lightblue" }, className: "heading", key: "title2" }, "Namaste React");
// To create complicated design
const container = React.createElement("div", { id: "container" }, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);