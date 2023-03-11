import React from 'react'

const TabBar = () => {
    const allTabs = ['Music', 'Gaming', 'News', 'Dramedy', 'Memes', 'Comedy', 'Movie musicals', 'Gadgets', 'Science', 'Action-adventure games', 'Cars', 'Recently uploaded']
    return (
        <div className='py-3 px-2 flex gap-3 w-full fixed bg-white overflow-hidden'>
            <button className='px-3 py-1 bg-black text-white rounded-md text-sm'>All</button>
            {
                allTabs.map((tab) => {
                    return <button key={crypto.randomUUID()} className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>{tab}</button>
                })
            }
        </div>
    )
}

export default TabBar;