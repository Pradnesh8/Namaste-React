import React from 'react'
import TabBar from './TabBar';
import VideoContainer from './VideoContainer';

const Body = () => {
    return (
        <div className='mt-12 overflow-x-hidden md:mx-3 md:flex-[6]'>
            <TabBar />
            <VideoContainer />
        </div>
    )
}

export default Body;