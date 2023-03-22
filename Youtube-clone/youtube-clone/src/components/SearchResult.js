import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { YOUTUBE_CHANNEL_IMG_API, YOUTUBE_VIDEO_LIST_SEARCH_API, YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API } from '../utils/config';
import { calculateDuration, convertToInternationalCurrencySystem, getTimeDifference } from '../utils/helper';
import Shimmer from './Shimmer';

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
            {/* <img src={thumbnails?.maxres && thumbnails?.maxres?.url !== "" ? thumbnails?.maxres?.url : thumbnails?.medium?.url} alt="thumbnail" className='w-auto rounded-lg' /> */}
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
    const [videoList, setVideoList] = useState([]);
    const [videoContentList, setVideoContentList] = useState([]);
    const fetchVideosBySearch = async () => {
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
    }
    useEffect(() => {
        fetchVideosBySearch()
    }, [searchQuery]);

    if (videoList.length === 0) {
        return <Shimmer id={"searchPage"} />
    }
    return (
        <div className='mx-20 mt-24 mb-8 flex-[6] flex flex-col gap-5'>
            {videoList.map((video, index) => {
                return <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
                    <VideoItemCard info={video} content={videoContentList[index]} />
                </Link>
            })}
        </div>
    )
}

export default SearchResult;