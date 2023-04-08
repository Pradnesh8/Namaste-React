import React from 'react'
import TabBar from './TabBar';
import VideoContainer from './VideoContainer';
import MobileNavActions from './MobileNavActions';

const Body = () => {
    return (
        <div className='mt-12 overflow-x-hidden md:mx-3 md:flex-[6]'>
            <TabBar />
            <VideoContainer />
            <MobileNavActions />
        </div>
    )
}

export default Body;