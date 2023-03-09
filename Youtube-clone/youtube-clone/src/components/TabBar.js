import React from 'react'

const TabBar = () => {
    return (
        <div className='py-3 px-2 flex gap-3 w-full fixed bg-white'>
            <button className='px-3 py-1 bg-black text-white rounded-md text-sm'>All</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>Comedy</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>Music</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>Thrillers</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>Gaming</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>JavaScript</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200'>Programming</button>
        </div>
    )
}

export default TabBar;