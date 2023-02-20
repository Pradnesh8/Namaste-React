import React, { useState } from "react";

const Section = ({ header, description, isVisible, toggleIsVisible }) => {
    return (
        <div className="p-4 m-2 border rounded-sm hover:shadow-md">
            <div className="flex justify-between px-4 flex-wrap">
                <h1 className="text-lg font-semibold">{header}</h1>
                {
                    isVisible ?
                        <button onClick={() => toggleIsVisible(header)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button> :
                        <button onClick={() => toggleIsVisible(header)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                }
            </div>
            {
                isVisible &&
                <div className="text-justify font-light text-base p-2">
                    {description}
                </div>
            }
        </div>
    )
}
const Store = () => {
    const [visibleSection, setVisibleSection] = useState("");
    const handleChangeSection = (section) => {
        visibleSection === section ? setVisibleSection("") : setVisibleSection(section);
    }
    // In this component we are using concept of "Lifiting state up"
    // we are passing down state in Section (Child) component
    // we can see the value as well as change it from child by using toggleIsVisible
    return (
        <div className="min-h-[90vh]">
            <h1 className="text-center font-bold mb-4 text-2xl">
                Store
            </h1>
            <Section isVisible={visibleSection === 'About'} toggleIsVisible={handleChangeSection} header="About" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime modi deleniti tenetur doloribus. Iure voluptatem nostrum necessitatibus nisi hic dolore similique mollitia, voluptas, in consequuntur placeat sequi ipsam. Nisi." />
            <Section isVisible={visibleSection === 'Team'} toggleIsVisible={handleChangeSection} header="Team" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime modi deleniti tenetur doloribus. Iure voluptatem nostrum necessitatibus nisi hic dolore similique mollitia, voluptas, in consequuntur placeat sequi ipsam. Nisi." />
            <Section isVisible={visibleSection === 'Careers'} toggleIsVisible={handleChangeSection} header="Careers" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime modi deleniti tenetur doloribus. Iure voluptatem nostrum necessitatibus nisi hic dolore similique mollitia, voluptas, in consequuntur placeat sequi ipsam. Nisi." />
        </div>
    )
}
export default Store

