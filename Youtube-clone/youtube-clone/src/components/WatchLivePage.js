import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_DETAIL_BY_ID_API, YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API, YOUTUBE_VIDEO_SUGGESTIONS_API } from '../utils/config';
import { calculateDuration, convertToInternationalCurrencySystem, getTimeDifference } from '../utils/helper';
import { closeSideNav } from '../utils/appSlice';
import NlevelComments from './NlevelComments';
import VideoDetail from './VideoDetail';
import LiveChat from './LiveChat';


const SuggestionVideoCard = ({ info, content }) => {
    const { statistics, contentDetails } = content ? content : {};
    const { duration } = contentDetails;
    const { snippet } = info;
    const { title, channelTitle, thumbnails, publishedAt } = snippet;

    return (
        <div className='flex gap-2 cursor-pointer'>
            <div className='relative min-w-[40%] max-w-[40%]'>
                <img src={thumbnails?.maxres && thumbnails?.maxres?.url !== "" ? thumbnails?.maxres?.url : thumbnails?.medium?.url} alt="thumbnail" className='w-auto rounded-lg' />
                {duration && <span className='absolute bottom-[2%] right-[2%] p-1 rounded-lg bg-black text-white text-xs font-semibold'>{calculateDuration(duration)}</span>}
            </div>
            <div className='flex flex-col justify-start mt-1 items-start px-1'>
                <span className='font-medium hide-overflow text-base' title={title}>{title}</span>
                <div className='flex gap-2 items-center py-1'>
                    <span className='text-sm font-light text-gray-500'>{channelTitle}</span>
                </div>
                <div className='flex gap-[1px] text-gray-500'>
                    <span className='flex text-xs'>
                        <span className='font-normal'>{convertToInternationalCurrencySystem(statistics?.viewCount)} views</span>
                        <span className="font-normal before:content-['•'] before:mx-1">{getTimeDifference(publishedAt)}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}


const WatchLivePage = () => {
    const [searchParams] = useSearchParams();
    const [suggestions, setSuggestions] = useState([]);
    const [videoContentList, setVideoContentList] = useState([]);
    const [videoDetails, setVideoDetails] = useState({});
    const dispatch = useDispatch();

    const getVideoDetails = async () => {
        const data = await fetch(YOUTUBE_VIDEO_DETAIL_BY_ID_API + searchParams.get("v"));
        const json = await data.json();
        setVideoDetails(json.items[0]);
    }

    const fetchSuggestions = async () => {
        const data = await fetch(YOUTUBE_VIDEO_SUGGESTIONS_API + searchParams.get("v"));
        const json = await data.json();
        const videoIds = []
        json.items.forEach((item) => {
            videoIds.push(item.id.videoId);
        });
        const data2 = await fetch(YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API + String(videoIds));
        const json2 = await data2.json();
        setVideoContentList(json2.items);
        setSuggestions(json.items);
    }
    useEffect(() => {
        dispatch(closeSideNav());
        getVideoDetails();
        fetchSuggestions();
    }, [])
    return (
        <div className=' flex-[6] w-full flex flex-col gap-6 md:mx-24 md:mt-20 md:flex-row'>
            <div className='flex overflow-x-hidden mt-16 w-full md:mt-0 md:flex-[70%] flex-col'>
                <iframe
                    className='w-full h-[36vh] md:h-[74vh]'
                    src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    autoPlay="1"
                ></iframe>
                {
                    Object.keys(videoDetails).length > 0 &&
                    (
                        <>
                            <VideoDetail info={videoDetails} />
                            <div className='hidden md:block'>
                                <NlevelComments commentCount={videoDetails?.statistics?.commentCount} />
                            </div>
                        </>
                    )
                }
            </div>
            <div className='md:flex-[30%] flex flex-col gap-6'>
                <div className='max-h-[600px] md:h-[600px] w-full rounded-lg'>
                    <LiveChat />
                </div>
                <div className='w-full flex flex-col gap-4'>
                    {
                        suggestions.map((video, index) => {
                            return <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
                                <SuggestionVideoCard info={video} content={videoContentList[index]} />
                            </Link>
                        })
                    }
                </div >
            </div>
        </div >
    )
}

export default WatchLivePage;