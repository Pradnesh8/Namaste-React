import React from 'react'

const Shimmer = ({ id }) => {
    const homePageShimmer = (
        <div className='mt-16 w-full flex flex-wrap justify-around gap-4'>
            {
                Array(30).fill("").map((item, index) => {
                    return (
                        <div key={crypto.randomUUID()} className='flex flex-col gap-1'>
                            <div className='w-96 h-40 bg-gray-200 animate-pulse'>
                            </div>
                            <div className='flex justify-start mt-1 items-start w-96 px-1'>
                                <div className='w-8 h-8 mt-1 mr-3 rounded-full bg-gray-200 animate-pulse'></div>
                                <div className='flex flex-col gap-1'>
                                    <span className='w-48 h-2 rounded-xl animate-pulse bg-gray-200'></span>
                                    <span className='w-32 h-2 rounded-xl animate-pulse bg-gray-200'></span>
                                    <span className='w-32 h-2 rounded-xl animate-pulse bg-gray-200'></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
    const searchPageShimmer = (
        <div className='mx-20 mt-24 mb-8 flex-[6] flex flex-col gap-5'>
            {
                Array(20).fill("").map((item, index) => {
                    return <div key={crypto.randomUUID()} className='flex gap-3 cursor-pointer animate-pulse bg-slate-100 rounded-lg h-[30vh] w-full'>
                        <div className='w-[30%] rounded-lg animate-pulse bg-gray-200'></div>
                        <div className='flex flex-col w-[70%] gap-5 justify-start mt-1 m-2 items-start px-1 animate-pulse'>
                            <div className='w-[100%] mt-5 h-5 rounded-xl animate-pulse bg-gray-400'></div>
                            <div className='w-[80%] h-3 rounded-xl animate-pulse bg-gray-200'></div>
                            <div className='w-[80%] h-3 rounded-xl animate-pulse bg-gray-200'></div>
                        </div>
                    </div>
                })
            }
        </div>
    );
    const searchNextPageShimmer = (
        Array(20).fill("").map((item, index) => {
            return <div key={crypto.randomUUID()} className='flex gap-3 cursor-pointer animate-pulse bg-slate-100 rounded-lg h-[30vh] w-full'>
                <div className='w-[30%] rounded-lg animate-pulse bg-gray-200'></div>
                <div className='flex flex-col w-[70%] gap-5 justify-start mt-1 m-2 items-start px-1 animate-pulse'>
                    <div className='w-[100%] mt-5 h-5 rounded-xl animate-pulse bg-gray-400'></div>
                    <div className='w-[80%] h-3 rounded-xl animate-pulse bg-gray-200'></div>
                    <div className='w-[80%] h-3 rounded-xl animate-pulse bg-gray-200'></div>
                </div>
            </div>
        })
    );
    const commentPageShimmer = (
        Array(20).fill("").map((item, index) => {
            return <div key={crypto.randomUUID()} className='flex gap-3 mt-5 animate-pulse'>
                <div className='h-10 w-10 rounded-full bg-gray-200 animate-pulse'></div>
                <div className="comment text-sm flex flex-col gap-1 w-[55vw] break-words bg-slate-100 p-2">
                    <span className='name font-medium w-[10vw] h-2 rounded-lg bg-gray-200 animate-pulse'></span>
                    <span className='text font-normal w-[40vw] h-2 rounded-lg bg-gray-200 animate-pulse'></span>
                </div>
            </div>
        })
    )
    switch (id) {
        case "homePage":
            return homePageShimmer
        case "searchPage":
            return searchPageShimmer
        case "searchNextPage":
            return searchNextPageShimmer
        case "commentPage":
            return commentPageShimmer
    }


}

export default Shimmer;