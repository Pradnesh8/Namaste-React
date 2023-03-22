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
        <div className='mt-8 p-8 w-full flex flex-wrap justify-around overflow-x-hidden gap-4'>
            {
                videos.map((video, index) => {
                    if (index === 0) {
                        return (
                            <Link key={video.id} to={"watchlive?v=" + video.id}>
                                <div className='relative pb-2 rounded-b-lg shadow-xl shadow-red-200'>
                                    <span title='Video for feature demo' className='bg-red-600 text-white px-3 py-1 absolute top-[2%] left-[0%] rounded-lg rounded-l-[0]'>Featured</span>
                                    <VideoCard info={video} />
                                </div>
                            </Link>
                        )
                    } else {
                        return (
                            <Link key={video.id} to={"watch?v=" + video.id}>
                                <VideoCard info={video} />
                            </Link>
                        )
                    }
                }

                )
            }
        </div >
    )
}

export default VideoContainer;