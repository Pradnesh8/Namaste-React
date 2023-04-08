import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { YOUTUBE_CHANNEL_IMG_API, YOUTUBE_VIDEO_LIST_SEARCH_API, YOUTUBE_VIDEO_LIST_SEARCH_API_NEXT_PAGE, YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API } from '../utils/config';
import { calculateDuration, convertToInternationalCurrencySystem, getTimeDifference } from '../utils/helper';
import Shimmer from './Shimmer';
import VideoCard from './VideoCard';

const VideoItemCard = ({ info, content }) => {

    const { statistics, contentDetails } = content ? content : {};
    const { duration } = contentDetails;
    const { snippet } = info;
    const { title, channelTitle, thumbnails, channelId, publishedAt, description } = snippet;
    const [channelImg, setChannelImg] = useState("");
    const getChannelImg = async () => {
        const data = await fetch(YOUTUBE_CHANNEL_IMG_API + channelId);
        const json = await data.json();
        setChannelImg(json?.items[0]?.snippet?.thumbnails?.default?.url)
    }
    useEffect(() => {
        getChannelImg();
    }, [])

    return (
        <div className='flex gap-3 cursor-pointer'>
            <div className='relative min-w-max'>
                <img src={thumbnails?.maxres && thumbnails?.maxres?.url !== "" ? thumbnails?.maxres?.url : thumbnails?.medium?.url} alt="thumbnail" className='w-auto rounded-lg' />
                {duration && <span className='absolute bottom-[2%] right-[2%] p-1 rounded-lg bg-black text-white text-xs font-semibold'>{calculateDuration(duration)}</span>}
            </div>
            <div className='flex flex-col justify-start mt-1 items-start px-1'>
                <span className='font-normal hide-overflow text-xl' title={title}>{title}</span>
                <div className='flex gap-[1px] mt-1'>
                    <span className='flex text-xs'>
                        <span className='font-normal'>{convertToInternationalCurrencySystem(statistics?.viewCount)} views</span>
                        <span className="font-normal before:content-['•'] before:mx-1">{getTimeDifference(publishedAt)}</span>
                    </span>
                </div>
                <div className='flex gap-2 items-center py-2'>
                    <img src={channelImg} alt="channel-image" className='w-8 h-8 rounded-full' />
                    <span className='text-sm font-light text-gray-500'>{channelTitle}</span>
                </div>
                <div style={{
                    WebkitLineClamp: 1,
                    overflowX: "hidden"
                }}
                    className="text-sm text-gray-700">
                    {description}
                </div>
            </div>
        </div>
    )
}

const SearchResult = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search_query');
    const observer = useRef();
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState("");
    const [videoList, setVideoList] = useState([]);
    const [videoContentList, setVideoContentList] = useState([]);
    const fetchVideosBySearch = async () => {
        setLoading(true);
        const data = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_API + searchQuery);
        const json = await data.json();
        const videoIds = []
        json.items.forEach((item) => {
            videoIds.push(item.id.videoId);
        });
        const data2 = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API + String(videoIds));
        const json2 = await data2.json();
        setVideoContentList(json2.items);
        setVideoList(json.items);
        setNextPageToken(json?.nextPageToken);
        setLoading(false);
    }
    const fetchNextPageVideosBySearch = async (pageToken) => {
        setLoading(true)
        const data = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_API_NEXT_PAGE + searchQuery + "&pageToken=" + pageToken);
        const json = await data.json();
        const videoIds = []
        json.items.forEach((item) => {
            videoIds.push(item.id.videoId);
        });
        const data2 = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API + String(videoIds));
        const json2 = await data2.json();
        setVideoContentList(prevVideos => [...prevVideos, ...json2.items]);
        setVideoList(prevVideos => [...prevVideos, ...json.items]);
        setNextPageToken(json?.nextPageToken);
        setLoading(false);
    }
    const lastVideoCard = useCallback((node) => {
        // if loading return
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextPageToken) {
                fetchNextPageVideosBySearch(nextPageToken);
            }
        })
        if (node) observer.current.observe(node)
    })

    useEffect(() => {
        fetchVideosBySearch()
    }, [searchQuery]);

    if (videoList.length === 0) {
        return <Shimmer id={"searchPage"} />
    }
    return (
        <>
            <div className='hidden md:flex mx-20 mt-24 mb-8 flex-[6] flex-col gap-5'>
                {videoList.map((video, index) => {
                    return (
                        videoList.length === index + 1 ?
                            <Link ref={lastVideoCard} key={video?.id?.videoId + index} to={"/watch?v=" + video?.id?.videoId}>
                                <VideoItemCard info={video} content={videoContentList[index]} />
                            </Link> :
                            <Link key={video?.id?.videoId + index} to={"/watch?v=" + video?.id?.videoId}>
                                <VideoItemCard info={video} content={videoContentList[index]} />
                            </Link>
                    )
                })}
                {loading && <Shimmer id={"searchNextPage"} />}
            </div>
            {/* For Mobile */}
            <div className='md:hidden mt-16 mb-8 flex-[6] flex flex-col gap-5 items-center'>
                {videoList.map((video, index) => {
                    return (
                        videoList.length === index + 1 ?
                            <Link ref={lastVideoCard} key={video?.id?.videoId + index} to={"/watch?v=" + video?.id?.videoId}>
                                <VideoCard info={{ ...video, ...videoContentList[index] }} />
                            </Link> :
                            <Link key={video?.id?.videoId + index} to={"/watch?v=" + video?.id?.videoId}>
                                <VideoCard info={{ ...video, ...videoContentList[index] }} />
                            </Link>
                    )
                })}
                {loading && <Shimmer id={"searchNextPage"} />}
            </div>
        </>
    )
}

export default SearchResult;