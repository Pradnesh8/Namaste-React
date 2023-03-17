import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../utils/config'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const fetchVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }
    useEffect(() => {
        fetchVideos()
    }, [])
    if (videos.length === 0) return <Shimmer id={"homePage"} />;
    return (
        <div className='mt-8 p-8 w-full flex flex-wrap justify-around gap-4'>
            {
                videos.map((video) =>
                    <Link key={video.id} to={"watch?v=" + video.id}>
                        <VideoCard info={video} />
                    </Link>
                )
            }
        </div >
    )
}

export default VideoContainer;