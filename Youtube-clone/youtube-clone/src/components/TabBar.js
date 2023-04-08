import React from 'react'

const TabBar = () => {
    const allTabs = ['Music', 'Gaming', 'News', 'Dramedy', 'Memes', 'Comedy', 'Movie musicals', 'Gadgets', 'Science', 'Action-adventure games', 'Cars', 'Recently uploaded']
    return (
        <div className='flex w-full scroll-smooth scroll-mt-2 py-2 pt-4 items-center gap-1 overflow-x-auto fixed bg-white md:py-3 md:px-2 md:gap-3 md:w-full md:overflow-hidden z-20'>
            <button className='px-5 h-8 mr-1 flex items-center gap-1 bg-gray-100 rounded-md text-sm md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path></svg>
                <span className=' -translate-y-[5%]'>Explore</span>
            </button>
            <span className='h-[2rem] mr-1 border w-[1px] bg-gray-200 md:hidden'></span>
            <button className='px-6 h-8 md:px-3 md:py-1 bg-black text-white rounded-md text-sm'>All</button>
            {
                allTabs.map((tab) => {
                    return <button key={crypto.randomUUID()} className='px-6 h-8 whitespace-nowrap md:px-3 md:py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>{tab}</button>
                })
            }
        </div>
    )
}

export default TabBar;