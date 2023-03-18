import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API, YOUTUBE_VIDEO_SUGGESTIONS_API } from '../utils/config';
import { convertToInternationalCurrencySystem, getTimeDifference } from '../utils/helper';
import { closeSideNav } from '../utils/appSlice';


const SuggestionVideoCard = ({ info, content }) => {
    const { statistics } = content ? content : {};
    const { snippet } = info;
    const { title, channelTitle, thumbnails, publishedAt } = snippet;

    return (
        <div className='flex gap-2 cursor-pointer'>
            <img src={thumbnails?.medium && thumbnails?.medium?.url !== "" ? thumbnails?.medium?.url : thumbnails?.default?.url} alt="thumbnail" className='w-[40%] rounded-lg' />
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

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [suggestions, setSuggestions] = useState([]);
    const [videoContentList, setVideoContentList] = useState([]);
    const dispatch = useDispatch();
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
        fetchSuggestions();
    }, [])
    return (
        <div className='mx-24 mt-20 flex-[6] flex gap-3'>
            <div className='flex-[70%]'>
                <iframe
                    className='w-full h-[74vh]'
                    src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    autoplay="1"
                ></iframe>
            </div>
            <div className='flex-[30%]'>
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
        </div>
    )
}

export default WatchPage;