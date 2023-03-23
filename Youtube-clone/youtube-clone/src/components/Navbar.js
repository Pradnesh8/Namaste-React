import React, { useEffect, useState } from 'react'
import logo from '../assets/ytb-logo.png';
import profilePhoto from '../assets/profile.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideNav } from '../utils/appSlice';
import { GOOGLE_SEARCH_API } from '../utils/config'
import { updateSearchCache } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    const [showQuery, setShowQuery] = useState(false);
    const searchCache = useSelector(store => store.search.searchCache);
    const dispatch = useDispatch();
    const toggleNav = () => {
        console.log("Toggle")
        dispatch(toggleSideNav());
    }


    const searchQueryItems = async () => {
        if (searchCache[searchQuery]) {
            console.log("from cache");
            setQueryResults(searchCache[searchQuery]);
        } else {
            const data = await fetch(GOOGLE_SEARCH_API + searchQuery);
            const json = await data.json();
            console.log("search result", json);
            dispatch(updateSearchCache(json));
            setQueryResults(json[1]);
        }
    }

    useEffect(() => {
        const t = setTimeout(() => {
            searchQueryItems();
        }, 300);
        return () => {
            clearTimeout(t);
        }
    }, [searchQuery])
    return (
        <section className='navbar flex justify-between items-center fixed bg-white w-full z-30'>
            <div className='logo-brand flex justify-start items-center gap-5 ml-4'>
                <span className='hamburger cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full' onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </span>
                <img src={logo} alt="YouTube logo" className='w-24 h-auto cursor-pointer' onClick={() => navigate("/")} />
            </div>
            <div className='search-bar flex flex-wrap justify-center items-center relative'>
                <span className='text-box'>
                    <input type="text" name="search" onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowQuery(true)} onBlur={() => {
                        setTimeout(() => {
                            setShowQuery(false)
                        }, 300)
                    }} id="search-bar" placeholder='Search' className='p-2 pl-5 w-[35vw] border rounded-l-3xl rounded-r-none placeholder:font-normal placeholder:text-gray-500' value={searchQuery} />
                </span>
                <button className='px-5 py-2 border bg-gray-100 rounded-r-3xl rounded-l-none' onClick={() => {
                    setSearchQuery(searchQuery);
                    navigate("/results?search_query=" + searchQuery)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                {
                    (searchQuery.length > 0 && showQuery) &&
                    <div className="search-suggestions w-[35vw] absolute top-[50px] left-0 z-20 py-3  flex flex-col bg-white shadow-2xl rounded-2xl">
                        {
                            queryResults.map((item) => {
                                return <div key={crypto.randomUUID()} className='px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-4 items-center' onClick={() => {
                                    setSearchQuery(item);
                                    navigate("/results?search_query=" + item)
                                }}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </span>
                                    <span>
                                        {item}
                                    </span>
                                </div>
                            })
                        }
                    </div>
                }
            </div>

            <div className='notify-login flex justify-end mr-6 items-center gap-5'>
                <span className='notifiaction-bell relative cursor-pointer mt-1' title='Notifications'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span className='absolute -top-2 -right-1 p-1 h-5 w-5 flex justify-center items-center rounded-full text-xs bg-red-600 text-white'>8</span>
                </span>
                <img src={profilePhoto} title="Profile" alt="Profile" className='w-10 h-10 rounded-full cursor-pointer' />
            </div>
        </section>
    )
}

export default Navbar;