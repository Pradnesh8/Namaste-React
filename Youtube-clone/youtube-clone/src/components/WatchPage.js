import React from 'react'
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams()
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
                -- TabBar
                -- Suggestion Video list
            </div>
        </div>
    )
}

export default WatchPage;