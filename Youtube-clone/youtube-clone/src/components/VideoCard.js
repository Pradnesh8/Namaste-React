import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_IMG_API } from '../utils/config';
import { calculateDuration, convertToInternationalCurrencySystem, getTimeDifference } from '../utils/helper';

const VideoCard = ({ info }) => {
    const { snippet, statistics, contentDetails } = info;
    const { duration } = contentDetails;
    const { title, channelTitle, thumbnails, channelId, publishedAt } = snippet;
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
        <div className='flex flex-col w-[100vw] md:w-fit h-auto gap-1 cursor-pointer'>
            <div className='relative'>
                <img src={thumbnails?.maxres && thumbnails?.maxres?.url !== "" ? thumbnails?.maxres?.url : thumbnails?.medium?.url} alt="thumbnail" className='w-[100vw] md:w-96 rounded-lg' />
                {duration && <span className='absolute bottom-[2%] right-[2%] p-1 rounded-lg bg-black text-white text-xs font-semibold'>{calculateDuration(duration)}</span>}
            </div>
            <div className='flex justify-start mt-1 items-start w-[100vw] md:w-96 px-1'>
                <img src={channelImg} alt="channel-image" className='w-8 h-8 mt-1 mr-3 rounded-full' />
                <div className='flex flex-col gap-[1px]'>
                    <span className='font-semibold hide-overflow' title={title}>{title}</span>
                    <span className='text-sm font-light'>{channelTitle}</span>
                    <span className='flex text-sm'>
                        <span className='font-light'>{convertToInternationalCurrencySystem(statistics?.viewCount)} views</span>
                        <span className="font-light before:content-['•'] before:mx-1">{getTimeDifference(publishedAt)}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;