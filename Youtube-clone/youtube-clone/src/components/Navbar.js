import React from 'react'
import logo from '../assets/ytb-logo.png';
import profilePhoto from '../assets/profile.jpg';
const Navbar = () => {
    return (
        <section className='navbar flex justify-between items-center'>
            <div className='logo-brand flex justify-start items-center gap-5 ml-4'>
                <span className='hamburger cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </span>
                <img src={logo} alt="YouTube logo" className='w-24 h-auto' />
            </div>
            <div className='search-bar flex justify-center items-center'>
                <span className='text-box'>
                    <input type="text" name="search" id="search-bar" placeholder='Search' className='p-2 pl-5 w-[35vw] border rounded-l-3xl rounded-r-none' />
                </span>
                <button className='px-5 py-2 border bg-gray-100 rounded-r-3xl rounded-l-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <div className='notify-login flex justify-end mr-6 items-center gap-5'>
                <span className='notifiaction-bell'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </span>
                <img src={profilePhoto} alt="Profile" className='w-10 h-10 rounded-full' />
            </div>
        </section>
    )
}

export default Navbar;