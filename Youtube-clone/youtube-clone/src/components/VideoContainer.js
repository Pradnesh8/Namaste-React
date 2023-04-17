import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEOS_API_NEXT_PAGE, YOUTUBE_VIDEO_LIST_BY_CATEGORY_API, YOUTUBE_VIDEO_LIST_SEARCH_API, YOUTUBE_VIDEO_LIST_SEARCH_API_NEXT_PAGE, YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API } from '../utils/config'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const observer = useRef();
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState("");
    const videoCategoryMain = useSelector(store => store.app.selectedCategory);
    const [videoCategoryLocal, setVideoCategoryLocal] = useState("");
    const [videoList, setVideoList] = useState([]);
    const [videoContentList, setVideoContentList] = useState([]);
    // TODO: Fetch videos by category
    // ==> Separate logic using if videoCategory==="all"
    // ==> Refer SearchResult
    const fetchVideosBySearch = async () => {
        setLoading(true);
        const data = await fetch(YOUTUBE_VIDEO_LIST_BY_CATEGORY_API + videoCategoryLocal);
        const json = await data.json();
        const videoIds = []
        json.items.forEach((item) => {
            videoIds.push(item.id.videoId);
        });
        const data2 = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API + String(videoIds));
        const json2 = await data2.json();
        console.log("data ContentDetails", json2);
        console.log("data JSON", json);
        setVideoContentList(json2.items);
        setVideos(json.items);
        setNextPageToken(json?.nextPageToken);
        setLoading(false);
    }
    const fetchNextPageVideosBySearch = async (pageToken) => {
        setLoading(true)
        const data = await fetch(YOUTUBE_VIDEO_LIST_BY_CATEGORY_API + videoCategoryLocal + "&pageToken=" + pageToken);
        const json = await data.json();
        const videoIds = []
        json.items.forEach((item) => {
            videoIds.push(item.id.videoId);
        });
        const data2 = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API + String(videoIds));
        const json2 = await data2.json();
        setVideoContentList(prevVideos => [...prevVideos, ...json2.items]);
        setVideos(prevVideos => [...prevVideos, ...json.items]);
        setNextPageToken(json?.nextPageToken);
        setLoading(false);
    }

    const fetchVideos = async () => {
        if (videoCategoryMain !== "all") {
            // setVideoCategoryLocal(videoCategoryLocal);
            fetchVideosBySearch();
        } else {
            // setVideoCategoryLocal(videoCategoryLocal);
            setLoading(true);
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideos(json.items);
            setNextPageToken(json?.nextPageToken);
            setLoading(false);
        }
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
                if (videoCategoryLocal !== "all") {
                    fetchNextPageVideosBySearch(nextPageToken);
                } else {
                    fetchNextPageVideos(nextPageToken);
                }
            }
        })
        if (node) observer.current.observe(node)
    })
    useEffect(() => {
        // setVideos([]);
        // setNextPageToken("");
        setVideoCategoryLocal(videoCategoryMain);
        // fetchVideos();
    }, [videoCategoryMain])
    useEffect(() => {
        setVideos([]);
        setVideoContentList([]);
        setNextPageToken("");
        console.log("changed", videoCategoryLocal);
        // setVideoCategoryLocal(videoCategoryMain);
        fetchVideos();
    }, [videoCategoryLocal])

    // TODO: Watch url is not generating properly


    return (
        videos?.length === 0 ? <Shimmer id={"homePage"} />
            :
            <>
                <div className='mt-16 md:mt-8 md:p-8 w-full flex flex-wrap justify-around overflow-x-hidden gap-4'>
                    {
                        videos?.map((video, index) => {
                            if (index === 0) {
                                return (
                                    <Link key={video?.id + video?.etag} to={"watchlive?v=" + video.id}>
                                        <div className='relative pb-2 rounded-b-lg shadow-[#fecaca_0px_5px_15px]'>
                                            <span title='Video for feature demo' className='bg-red-600 z-10 text-white px-3 py-1 absolute top-[2%] left-[0%] rounded-lg rounded-l-[0]'>Featured</span>
                                            {console.log("merged", { ...video, ...videoContentList[index] }, videoCategoryLocal)}
                                            {
                                                videoCategoryLocal !== "all" ?
                                                    <VideoCard info={{ ...video, ...videoContentList[index] }} /> :
                                                    <VideoCard info={video} />
                                            }

                                        </div>
                                    </Link>
                                )
                            } else {
                                return (
                                    videos.length === index + 1 ?
                                        <Link ref={lastVideoCard} key={video?.id + video?.etag} to={"watch?v=" + video.id}>
                                            {console.log("merged", { ...video, ...videoContentList[index] }, videoCategoryLocal)}
                                            {
                                                videoCategoryLocal !== "all" ?
                                                    <VideoCard info={{ ...video, ...videoContentList[index] }} /> :
                                                    <VideoCard info={video} />
                                            }
                                        </Link> :
                                        <Link key={video?.id + video?.etag} to={"watch?v=" + video.id}>
                                            {console.log("merged", { ...video, ...videoContentList[index] }, videoCategoryLocal)}
                                            {
                                                videoCategoryLocal !== "all" ?
                                                    <VideoCard info={{ ...video, ...videoContentList[index] }} /> :
                                                    <VideoCard info={video} />
                                            }
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