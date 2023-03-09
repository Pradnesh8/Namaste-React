import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import AppContext from '../utils/AppContext';

const Sidenav = () => {
    const sideNav = useSelector(store => store.app.sideNav);
    console.log("sideNav", sideNav);
    // For toggling theme
    const appContext = useContext(AppContext);
    console.log("appcontext", appContext);
    if (!sideNav) return null;
    return (
        <section className='sidenav flex-[1] sticky top-12 mt-12 text-sm px-1 flex flex-col pt-3 gap-3 max-h-[92vh] overflow-y-hidden hover:overflow-y-auto hover:scrollbar'>
            <div className='sub-section flex flex-col gap-1 border pb-3 border-b-gray-300 border-x-0 border-t-0'>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer bg-gray-100 rounded-xl'>
                    <span className='icon'>
                        {/* <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M12 4.33l7 6.12V20h-4v-6H9v6H5v-9.55l7-6.12M12 3l-8 7v11h6v-6h4v6h6V10l-8-7z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg> */}


                        {/* Home filled */}
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M4 10v11h6v-6h4v6h6V10l-8-7z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>

                    </span>
                    <span className='nav-item'>
                        Home
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="256"
                            viewBox="0 0 256 256"
                            className='w-6 h-6'
                        >
                            <g fill="#000" strokeMiterlimit="10" strokeWidth="0">
                                <path
                                    d="M29.722 90.007c-1.789 0-3.588-.266-5.35-.802a18.344 18.344 0 01-10.878-8.903c-4.518-8.409-1.74-18.991 6.323-24.094a77.92 77.92 0 003.715-2.079 169.713 169.713 0 00-3.07-1.762c-4.949-2.859-7.99-6.861-8.806-11.582-1.085-6.409-1.087-14.509 8.599-20.335 7.856-4.696 15.914-9.297 23.707-13.747 2.584-1.475 5.169-2.951 7.753-4.435C56.812-.635 63.109-.75 68.568 1.961c5.51 2.736 9.263 7.886 10.04 13.776 1.131 7.532-2.631 15.056-9.362 18.704-1 .565-1.958 1.122-2.892 1.679.212.126.42.252.626.376.733.442 1.44.867 2.162 1.275 5.543 3.12 9.042 8.417 9.599 14.53.549 6.04-1.894 11.799-6.702 15.8-1.545 1.256-3.291 2.239-4.979 3.191-.5.281-.999.563-1.492.851-7.995 4.658-17.48 10.163-27.21 15.667a18.146 18.146 0 01-8.636 2.197zm30.607-88c-2.663 0-5.287.667-7.622 1.997-2.583 1.483-5.169 2.96-7.754 4.435-7.785 4.446-15.834 9.042-23.67 13.726-6.839 4.113-9.129 9.581-7.657 18.282.899 5.198 4.75 8.406 7.823 10.18a206.57 206.57 0 014.553 2.636 1.001 1.001 0 01.004 1.717c-1.806 1.083-3.444 2.054-5.196 2.96-7.105 4.5-9.579 13.925-5.556 21.412a16.358 16.358 0 009.699 7.938c4.185 1.272 8.603.833 12.438-1.231 9.702-5.489 19.18-10.99 27.169-15.645.502-.292 1.01-.578 1.519-.864 1.615-.91 3.285-1.851 4.69-2.993 4.286-3.567 6.47-8.7 5.981-14.075-.495-5.448-3.626-10.175-8.589-12.969-.74-.418-1.462-.853-2.212-1.304-.648-.391-1.318-.794-2.042-1.211a1 1 0 01-.024-1.718 133.918 133.918 0 014.396-2.589c6.009-3.257 9.359-9.955 8.35-16.675-.692-5.246-4.037-9.824-8.95-12.264a16.559 16.559 0 00-7.35-1.745z"
                                    transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                                ></path>
                                <path
                                    d="M36.55 59.249a1 1 0 01-1.001-1V32.127a1 1 0 011.5-.866l22.595 13.031a.999.999 0 01.001 1.732l-22.594 13.09a.992.992 0 01-.501.135zm1-25.391v22.655L57.147 45.16 37.55 33.858z"
                                    transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                                ></path>
                            </g>
                        </svg>
                        {/* 
                        Shorts filled
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="256"
                            viewBox="0 0 256 256"
                            className='w-6 h-6'
                        >
                            <path
                                fill="#000"
                                strokeMiterlimit="10"
                                strokeWidth="0"
                                d="M69.186 38.498c-1.406-.795-2.751-1.651-4.34-2.568a137.856 137.856 0 014.463-2.629c6.541-3.546 10.148-10.759 9.047-18.095-1.59-12.042-15.467-19.01-25.981-13.02C41.616 8.361 30.857 14.413 20.22 20.77c-8.436 5.074-9.659 11.798-8.314 19.745.856 4.952 4.157 8.619 8.497 11.126 1.528.856 2.995 1.712 4.646 2.69-1.834 1.1-3.484 2.078-5.257 2.995-7.825 4.952-10.515 15.099-6.113 23.291 4.646 8.62 15.405 11.921 24.024 7.275 9.292-5.257 18.584-10.637 27.815-16.016 2.201-1.284 4.524-2.445 6.48-4.035 9.842-8.192 8.375-23.046-2.812-29.343zM36.359 58.549V31.835l23.108 13.327-23.108 13.387z"
                                transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                            ></path>
                        </svg> */}
                    </span>
                    <span className='nav-item'>
                        Shorts
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <svg
                        className="w-6 h-6"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                    >
                        <g className="style-scope yt-icon">
                            <path
                                d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                                className="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                    {/* 
                    Subscriptions filled
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6l-5-3v6l5-3zm2-12H7v1h10V3z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span> */}
                    <span className='nav-item'>
                        Subscriptions
                    </span>
                </div>
            </div>
            <div className='sub-section flex flex-col gap-1 border pb-3 border-b-gray-300 border-x-0 border-t-0'>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M11 7l6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Library
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        History
                    </span>
                </div>
            </div>
            <div className='sub-section flex flex-col gap-1 border pb-3 border-b-gray-300 border-x-0 border-t-0'>
                <div className="sub-section-header px-5 pb-1">Explore</div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M14.72 17.84c-.32.27-.83.53-1.23.66-1.34.33-2.41-.34-2.62-.46-.21-.11-.78-.38-.78-.38l.41-.13c1.34-.54 1.89-1.24 2.09-2.11.2-.84-.16-1.56-.31-2.39-.12-.69-.11-1.28.12-1.9.02-.05.12-.43.12-.43l.13.41c.71 1.51 2.72 2.18 3.07 3.84.03.15.05.3.05.46.03.89-.37 1.85-1.05 2.43zM12.4 4.34c-.12.08-.22.15-.31.22-2.99 2.31-2.91 5.93-2.31 8.55l.01.03.01.03c.06.35-.05.7-.28.96-.24.26-.58.41-.95.41-.44 0-.85-.2-1.22-.6a7.476 7.476 0 01-1.5-2.46c-.36.77-.75 1.98-.67 3.19.04.51.12 1 .25 1.43.18.6.43 1.16.75 1.65 1.05 1.66 2.88 2.82 4.78 3.05.42.05.85.08 1.26.08 1.34 0 3.25-.27 4.74-1.57 1.77-1.56 2.35-3.99 1.44-6.06-.04-.1-.06-.14-.09-.19l-.04-.08c-.21-.42-.47-.81-.75-1.14-.24-.3-.48-.56-.79-.83-.3-.27-.64-.51-1-.77-.46-.33-.93-.67-1.38-1.09-1.37-1.32-2.05-3.04-1.95-4.81M14.41 2s-.2.2-.56.99c-.66 1.92-.15 3.95 1.34 5.39.73.69 1.61 1.17 2.36 1.84.32.29.62.59.89.93.36.42.66.89.91 1.38.05.1.1.2.14.3 1.12 2.55.36 5.47-1.73 7.31-1.53 1.33-3.54 1.86-5.54 1.86-.47 0-.95-.03-1.41-.09-2.29-.28-4.42-1.66-5.63-3.57a7.465 7.465 0 01-1.17-3.6c-.12-1.88.67-3.63 1.08-4.31.41-.69 1.55-2.18 1.55-2.18s0 .03-.01.09c-.22 1.77.37 3.54 1.59 4.88.15.17.27.22.34.22.06 0 .09-.04.08-.09C7.79 9.59 8.37 6 11.35 3.7c.59-.46 1.51-.94 1.98-1.18S14.41 2 14.41 2z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Trending
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2a5 5 0 00-9.8 0H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Shopping
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Music
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M22.01 4.91l-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Movies
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7l-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71a9.968 9.968 0 000 14.16l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71l-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Live
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35l-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15l4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Gaming
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        News
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M17 3v7.51l-.01.46c-.05 2.13-1.33 3.97-3.25 4.7h-.02l-.06.02-.66.26V20h1v1h1-5v-1h1v-4.05l-.66-.24-.08-.03h-.01c-1.92-.73-3.2-2.57-3.25-4.7V3h10zm1-1H6v3H4v6h2.01c.06 2.53 1.62 4.78 3.96 5.64.01 0 .02 0 .03.01V19H9v1H8v2h8v-2h-1v-1h-1v-2.35c.01 0 .02 0 .03-.01 2.33-.86 3.9-3.1 3.96-5.64H20V5h-2V2zm0 8V6h1v4h-1zM5 10V6h1v4H5z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Sports
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M16 21h-2.28a1.98 1.98 0 01-3.44 0H8v-1h8v1zm4-11a7.98 7.98 0 01-4 6.92V19H8v-2.08A7.98 7.98 0 014 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29A7.017 7.017 0 0019 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Learning
                    </span>
                </div>
                <div className='flex items-center gap-5 p-2 mx-3 cursor-pointer hover:bg-gray-100 hover:rounded-xl'>
                    <span className='icon'>
                        <svg
                            className="w-6 h-6"
                            display="block"
                            pointerEvents="none"
                            viewBox="0 0 24 24"
                        >
                            <g className="style-scope yt-icon">
                                <path
                                    d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12L12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"
                                    className="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span className='nav-item'>
                        Fashion & Beauty
                    </span>
                </div>
            </div>
            {/*TODO: More from YouTube section */}
            {/*TODO: Settings Help Section */}
            {/*TODO: Footer About Copyright */}
        </section>
    )
}

export default Sidenav;