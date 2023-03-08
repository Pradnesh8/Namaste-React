import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/config'
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
    if (videos.length === 0) return null;
    return (
        <div className='mt-2 w-[80vw] flex flex-wrap justify-around gap-4'>
            {
                videos.map((video) =>
                    <VideoCard key={video.id} info={video} />
                )
            }
        </div>
    )
}

export default VideoContainer;