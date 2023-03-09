import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_IMG_API } from '../utils/config';
import { convertToInternationalCurrencySystem } from '../utils/helper';

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails, channelId } = snippet;
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
        <div className='flex flex-col min-w-fit h-auto gap-1 cursor-pointer'>
            <img src={thumbnails?.medium?.url} alt="thumbnail" className='w-72 rounded-lg' />
            <div className='flex justify-start mt-1 items-start w-72 px-1'>
                <img src={channelImg} alt="channel-image" className='w-8 h-8 mt-1 mr-3 rounded-full' />
                <div className='flex flex-col gap-[1px]'>
                    <span className='font-semibold'>{title}</span>
                    <span className='text-sm font-light'>{channelTitle}</span>
                    <span className='text-sm font-light'>{convertToInternationalCurrencySystem(statistics.viewCount)} views</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;