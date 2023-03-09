import React from 'react'
import TabBar from './TabBar';
import VideoContainer from './VideoContainer';

const Body = () => {
    return (
        <div className='mx-3 mt-12  flex-[6]'>
            <TabBar />
            <VideoContainer />
        </div>
    )
}

export default Body;