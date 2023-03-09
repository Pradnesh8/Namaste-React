import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/config'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const fetchVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }
    useEffect(() => {
        fetchVideos();
    }, [])
    if (videos.length === 0) return <Shimmer />;
    return (
        <div className='mt-16 w-full flex flex-wrap justify-around gap-4'>
            {
                videos.map((video) =>
                    <VideoCard key={video.id} info={video} />
                )
            }
        </div>
    )
}

export default VideoContainer;