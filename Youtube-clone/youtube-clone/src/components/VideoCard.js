import React from 'react'
import { convertToInternationalCurrencySystem } from '../utils/helper';

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
    return (
        <div className='flex flex-col min-w-fit h-auto gap-1'>
            <img src={thumbnails.medium.url} alt="thumbnail" className='w-72 rounded-lg' />
            <div className='flex justify-start mt-1 items-start w-72 px-1'>
                <img src={thumbnails.default.url} alt="channel-image" className='w-8 h-8 mt-1 mr-3 rounded-full' />
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