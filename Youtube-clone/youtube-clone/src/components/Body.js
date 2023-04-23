import React, { useEffect } from 'react'
import TabBar from './TabBar';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';

const Body = () => {
    const videoCategoryMain = useSelector(store => store.app.selectedCategory);
    useEffect(() => {
        console.log("changed category", videoCategoryMain);
    }, [videoCategoryMain])
    return (
        <div className='mt-12 overflow-x-hidden md:mx-3 md:flex-[6]'>
            <TabBar />
            <VideoContainer category={videoCategoryMain} />
        </div>
    )
}

export default Body;