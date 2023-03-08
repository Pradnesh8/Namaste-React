import React from 'react'
import TabBar from './TabBar';
import VideoContainer from './VideoContainer';

const Body = () => {
    return (
        <div className='mx-3'>
            <TabBar />
            <VideoContainer />
        </div>
    )
}

export default Body;