import React, { useState } from "react";

const Section = ({ header, description, isVisible, toggleIsVisible }) => {
    return (
        <div className="p-4 m-2 border rounded-sm hover:shadow-md cursor-pointer" onClick={() => toggleIsVisible(header)}>
            <div className="flex justify-between px-4 flex-wrap">
                <h1 className="text-lg font-semibold">{header}</h1>
                {
                    isVisible ?
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button> :
                        <button>
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
const ProfileStore = () => {
    const [visibleSection, setVisibleSection] = useState("");
    const handleChangeSection = (section) => {
        visibleSection === section ? setVisibleSection("") : setVisibleSection(section);
    }
    const mockText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam distinctio consectetur perferendis culpa quibusdam. Repudiandae veniam recusandae nulla neque nobis dolores tenetur, amet incidunt repellat nihil totam nemo praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit totam distinctio consectetur perferendis culpa quibusdam.Repudiandae veniam recusandae nulla neque nobis dolores tenetur, amet incidunt repellat nihil totam nemo praesentium."
    // In this component we are using concept of "Lifiting state up"
    // we are passing down state in Section (Child) component
    // we can see the value as well as change it from child by using toggleIsVisible
    return (
        <div className="h-fit w-full flex-[60%]">
            <Section isVisible={visibleSection === 'About'} toggleIsVisible={handleChangeSection} header="About" description={mockText} />
            <Section isVisible={visibleSection === 'Team'} toggleIsVisible={handleChangeSection} header="Team" description={mockText} />
            <Section isVisible={visibleSection === 'Careers'} toggleIsVisible={handleChangeSection} header="Careers" description={mockText} />
        </div>
    )
}
export default ProfileStore

