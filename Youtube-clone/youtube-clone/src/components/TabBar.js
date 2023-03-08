import React from 'react'

const TabBar = () => {
    return (
        <div className='my-3 mx-2 flex gap-3'>
            <button className='px-3 py-1 bg-black text-white rounded-md text-sm'>All</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm'>Comedy</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm'>Music</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm'>Thrillers</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm'>Gaming</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm'>JavaScript</button>
            <button className='px-3 py-1 bg-gray-100 rounded-md text-sm'>Programming</button>
        </div>
    )
}

export default TabBar;