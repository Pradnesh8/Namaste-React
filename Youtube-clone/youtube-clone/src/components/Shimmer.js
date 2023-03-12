import React from 'react'

const Shimmer = () => {
    return (
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
}

export default Shimmer;