import React from 'react'
import dog from '../assets/error-dog.jpg';
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center flex-[6] mt-[10vh] md:mt-0'>
            <div className='text-4xl font-light'>Oops! Something went wrong</div>
            <div className='text-xl font-light'>Please try again later!</div>
            <img src={dog} alt="error" className='h-[60vh] mt-3 w-auto rounded-md' />
        </div>
    )
}

export default ErrorPage