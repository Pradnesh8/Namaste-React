import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEOS_API_NEXT_PAGE } from '../utils/config'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const observer = useRef();
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState("");

    const fetchVideos = async () => {
        setLoading(true);
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
        setNextPageToken(json?.nextPageToken);
        setLoading(false);
    }
    const fetchNextPageVideos = async (pageToken) => {
        setLoading(true);
        const data = await fetch(YOUTUBE_VIDEOS_API_NEXT_PAGE + pageToken);
        const json = await data.json();
        setVideos(prevVideos => [...prevVideos, ...json.items]);
        setNextPageToken(json?.nextPageToken);
        setLoading(false);
    }
    const lastVideoCard = useCallback((node) => {
        // if loading return
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextPageToken) {
                fetchNextPageVideos(nextPageToken);
            }
        })
        if (node) observer.current.observe(node)
    })
    useEffect(() => {
        fetchVideos();
    }, [])

    return (
        videos.length === 0 ? <Shimmer id={"homePage"} />
            :
            <>
                <div className='mt-8 p-8 w-full flex flex-wrap justify-around overflow-x-hidden gap-4'>
                    {
                        videos.map((video, index) => {
                            if (index === 0) {
                                return (
                                    <Link key={video.id} to={"watchlive?v=" + video.id}>
                                        <div className='relative pb-2 rounded-b-lg shadow-[#fecaca_0px_5px_15px]'>
                                            <span title='Video for feature demo' className='bg-red-600 z-10 text-white px-3 py-1 absolute top-[2%] left-[0%] rounded-lg rounded-l-[0]'>Featured</span>
                                            <VideoCard info={video} />
                                        </div>
                                    </Link>
                                )
                            } else {
                                return (
                                    videos.length === index + 1 ?
                                        <Link ref={lastVideoCard} key={video.id} to={"watch?v=" + video.id}>
                                            <VideoCard info={video} />
                                        </Link> :
                                        <Link key={video.id} to={"watch?v=" + video.id}>
                                            <VideoCard info={video} />
                                        </Link>
                                )
                            }
                        })
                    }
                </div>
                {loading && <Shimmer id={"homePage"} />}
            </>
    )
}

export default VideoContainer;