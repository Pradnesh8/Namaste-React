import React from 'react'

const MobileNavActions = () => {
    // const [showNav, setShowNav] = useState(true);
    // const stickNavbar = () => {
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         setShowNav(true);
    //     }
    //     const i = setTimeout(() => {
    //         setShowNav(false);
    //     }, 500);
    //     clearTimeout(i);
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", stickNavbar);
    //     return () => {
    //         window.removeEventListener("scroll", stickNavbar);
    //     }
    // }, [])
    return (
        <section className={'md:hidden foot-actions flex justify-around items-center bg-white py-2 fixed bottom-0 z-20 w-full'}>
            <div className='flex flex-col mx-2 cursor-pointer justify-center items-center'>
                <span><svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" className='h-6 w-6' focusable="false"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg></span>
                <span className='text-xs'>Home</span>
            </div>
            <div className='flex flex-col mx-2 cursor-pointer justify-center items-center'>
                <span><svg height="24" viewBox="0 0 24 24" width="24" focusable="false" className='h-6 w-6'><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg></span>
                <span className='text-xs'>Shorts</span>
            </div>
            <div className='flex flex-col mx-2 cursor-pointer justify-center items-center'>
                <span><svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" className='h-6 w-6'><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg></span>
                <span className='text-xs'>Library</span>
            </div>
        </section>
    )
}

export default MobileNavActions