import React from 'react';
import profilePhoto from '../assets/profile.jpg';
const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center px-3 py-2 m-1 rounded-lg shadow-sm text-xs'>
            {
                name === "Test User" ?
                    <img src={profilePhoto} alt="Profile" className='w-5 h-5 rounded-full' />
                    :
                    <div className='w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full p-1'>
                        <span className='text-[8px]'>
                            {name?.charAt(0)?.toUpperCase()}
                        </span>
                    </div>
            }
            <span className='font-bold mx-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage