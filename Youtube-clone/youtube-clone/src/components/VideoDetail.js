import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_IMG_API } from '../utils/config';
import { convertToInternationalCurrencySystem, formattedDate } from '../utils/helper';

const VideoDetail = ({ info }) => {
    const [showMore, setShowMore] = useState(false);
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails, channelId, publishedAt, description } = snippet;
    const [channelImg, setChannelImg] = useState("");
    const getChannelImg = async () => {
        const data = await fetch(YOUTUBE_CHANNEL_IMG_API + channelId);
        const json = await data.json();
        setChannelImg(json?.items[0]?.snippet?.thumbnails?.default?.url)
    }
    useEffect(() => {
        getChannelImg();
    }, []);
    return (
        <div className='mt-3 flex flex-col gap-3 info-box'>
            <div className="title font-medium text-xl">{title}</div>
            <div className="channel-action-bar flex items-center justify-between">
                <div className='channel-sction flex items-center'>
                    <img src={channelImg} alt="Channel Picture" className='w-10 h-10 rounded-full' />
                    <div className="channel-stats flex flex-col justify-between ml-2">
                        <span className='channel-name font-medium'>{channelTitle}</span>
                        <span className='subscribers text-xs text-gray-600'> 13.4M subscribers</span>
                    </div>
                    <button className='bg-black font-semibold text-base rounded-full text-white px-3 h-8 ml-4'>Subscribe</button>
                </div>
                <div className="actions flex items-center gap-2">
                    <div className="like-dislike rounded-full p-2 bg-gray-200 flex items-center">
                        <span className='border pr-2 border-l-0 border-r-gray-300 flex gap-1 cursor-pointer'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744C18.238 5.531 18.682 0 15.233 0c-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401V10H0v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zM4 20H2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614C10.72 20.041 8.521 19.072 6 19v-6c3.264-.749 6.328-2.254 8.321-9.113C15.219.795 16 1.956 16 4.461c0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"></path>
                            </svg>
                            <span>
                                {convertToInternationalCurrencySystem(statistics?.likeCount)}
                            </span>
                        </span>
                        <span className='cursor-pointer'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className='ml-2'
                            >
                                <path d="M24 11.936c0-1-.986-6.373-1.486-8.25C21.8.997 20.043 0 17.505 0c-2.283 0-4.079.617-5.336 1.158-2.05.883-3.791 1.519-6.169 1.746V2H0v12h6v-.73c2.454.585 4.852 2.066 6.4 7.402.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.106-.466 2.767-.692 3.977-.744 1.426-.06 2.594-.858 2.594-2.506zM4 12H2V4h2v8zm15.755-1.302l1.394.167c1.075.129 1.105 1.525.051 1.584-2.749.154-5.06 1.013-6.12 1.556.43 1.748.92 3.463.92 5.534 0 2.505-.781 3.666-1.679.574C12.328 13.254 9.264 11.749 6 11V5c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.875 1.028-.141 1.115z"></path>
                            </svg>
                        </span>
                    </div>
                    <button className="share rounded-full py-2 px-4 bg-gray-200 flex items-center">
                        <span>Share</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className='pl-1'
                        >
                            <path d="M16 15v4l8-8.035L16 3v4S2.723 9.144 0 21c5.796-6.206 16-6 16-6z"></path>
                        </svg>
                    </button>
                    <button className='h-10 w-10 flex items-center justify-center rounded-full p-2 bg-gray-200'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            clipRule="evenodd"
                            viewBox="0 0 24 24"
                            className='h-6 w-6'
                        >
                            <path d="M16.5 11.995a2.25 2.25 0 114.502.002 2.25 2.25 0 01-4.502-.002zm-6.75 0a2.25 2.25 0 114.502.002 2.25 2.25 0 01-4.502-.002zm-6.75 0a2.25 2.25 0 114.502.002A2.25 2.25 0 013 11.995z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="description flex flex-col p-2 bg-gray-200 rounded-lg mt-2">
                <div className='views-date text-sm font-medium'>
                    <span className='mr-3'>{convertToInternationalCurrencySystem(statistics?.viewCount)} views</span>
                    <span>{formattedDate(publishedAt)}</span>
                </div>
                <div className={"description text-sm flex flex-col gap-1"}>
                    <div className={!showMore && "hide-overflow"}>
                        {description}
                    </div>
                    <div className='font-semibold cursor-pointer' onClick={() => { setShowMore(!showMore) }}>Show {!showMore ? "more" : "less"}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail