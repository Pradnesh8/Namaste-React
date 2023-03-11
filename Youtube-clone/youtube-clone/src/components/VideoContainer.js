import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEO_LIST_SEARCH_API } from '../utils/config'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const searchedVideo = useSelector(store => store.app.searchQuery);
    const fetchVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }
    const fetchVideosBySearch = async () => {
        const data = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_API + searchedVideo);
        const json = await data.json();
        console.log("VIDEOS", json.items);
        setVideos(json.items);
    }
    useEffect(() => {
        searchedVideo.length === 0 ? fetchVideos() : fetchVideosBySearch();
    }, [searchedVideo])
    if (videos.length === 0) return <Shimmer />;
    return (
        <div className='mt-8 p-8 w-full flex flex-wrap justify-around gap-4'>
            {
                videos.map((video) =>
                    <VideoCard key={video.id} info={video} />
                )
            }
        </div>
    )
}

export default VideoContainer;