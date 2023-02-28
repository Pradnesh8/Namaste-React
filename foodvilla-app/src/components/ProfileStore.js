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
    // In this component we are using concept of "Lifiting state up"
    // we are passing down state in Section (Child) component
    // we can see the value as well as change it from child by using toggleIsVisible
    return (
        <div className="h-fit w-full flex-[60%]">
            <div className="text-lg font-medium text-justify text-gray-500 p-1">
                Welcome to <span className="text-black">FoodieWoodie</span>, your go-to food delivery web application for delicious meals delivered straight to your doorstep.
            </div>
            <Section isVisible={visibleSection === 'About'} toggleIsVisible={handleChangeSection} header="About" description="At FoodieWoodie, we believe that food should be a celebration of life, and we're on a mission to bring that joy to your doorstep. Our team is passionate about food, and we're committed to delivering the best possible dining experience to our customers.
            We take pride in our commitment to quality and customer satisfaction. Our website is user-friendly and easy to navigate, making it easy to place your order and track your delivery. We also offer flexible delivery options, so you can enjoy your meal on your own schedule.
            We understand that food is not just nourishment for the body but a way to connect with friends and family, to celebrate, to relax, and to enjoy life's little moments. That's why we're dedicated to delivering the best possible dining experience to you." />
            <Section isVisible={visibleSection === 'Team'} toggleIsVisible={handleChangeSection} header="Team" description={"Our team of chefs and delivery drivers work tirelessly to bring you the freshest and most flavorful meals possible. We carefully curate our menu to offer a wide range of cuisines, from classic comfort food to exotic international dishes. Whether you're craving pizza, sushi, or Indian cuisine, we've got you covered."} />
            <Section isVisible={visibleSection === 'Careers'} toggleIsVisible={handleChangeSection} header="Careers" description={"Coming Soon ..."} />
            <div className="text-lg font-medium text-justify text-gray-500 p-1 mt-1">
                Thank you for choosing FoodieWoodie. We're excited to serve you and make your mealtime an experience to remember.
            </div>
        </div>
    )
}
export default ProfileStore

