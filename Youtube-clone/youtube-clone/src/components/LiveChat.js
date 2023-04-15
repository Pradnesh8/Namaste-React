import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLiveMessage } from '../utils/chatSlice';
import { generateName, generateRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const [showLiveChat, setShowLiveChat] = useState(false);
    const dispatch = useDispatch();
    const liveMessages = useSelector(store => store.chat.messages)
    useEffect(() => {
        //API polling
        const i = setInterval(() => {
            dispatch(addLiveMessage({
                name: generateName(),
                message: generateRandomMessage()
            }))
        }, 1500);

        return () => clearInterval(i);
    }, [])
    return (
        <div className='rounded-2xl border border-slate-200 p-3'>
            {/* For Desktop */}
            <div className='hidden md:block font-medium text-lg p-1'>Live chat</div>
            {/* For Mobile */}
            <div className='md:hidden flex justify-between font-medium text-lg p-1'>
                <span>Live chat</span>
                <span className='cursor-pointer' onClick={() => {
                    setShowLiveChat(!showLiveChat);
                }}><svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><path d="M12,21.7l-6.4-6.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,21.7z M18.4,8.6L12,2.3L5.6,8.6l0.7,0.7L12,3.7l5.6,5.6L18.4,8.6z"></path></svg></span>
            </div>
            {
                showLiveChat &&
                <>
                    <div className='message-container h-[496px] flex flex-col-reverse overflow-y-auto bg-slate-100'>
                        {
                            liveMessages.map((chat, index) => <ChatMessage key={chat.name + index} name={chat?.name} message={chat?.message} />)
                        }
                    </div>
                    <form className='mt-2 input-chat flex items-center justify-between w-full mx-1' onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(addLiveMessage({
                            name: "Test User",
                            message: liveMessage
                        }));
                        setLiveMessage("");
                    }}>
                        <input onChange={(e) => setLiveMessage(e.target.value)} className='px-2 py-1 w-96 border border-slate-200' type="text" name="message" id="message" value={liveMessage} />
                        <button className='p-2 bg-slate-200 rounded-full mr-1'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className='w-4 h-4'
                            >
                                <path d="M6.185 4.843L18.112 12 6.185 19.157 9.167 12 6.185 4.843zM2 0l5 12-5 12 20-12L2 0z"></path>
                            </svg>
                        </button>
                    </form>
                </>
            }
            <div className='hidden md:flex message-container h-[496px] flex-col-reverse overflow-y-auto bg-slate-100'>
                {
                    liveMessages.map((chat, index) => <ChatMessage key={chat.name + index} name={chat?.name} message={chat?.message} />)
                }
            </div>
            <form className='hidden md:flex mt-2 input-chat items-center justify-between w-full mx-1' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addLiveMessage({
                    name: "Test User",
                    message: liveMessage
                }));
                setLiveMessage("");
            }}>
                <input onChange={(e) => setLiveMessage(e.target.value)} className='px-2 py-1 w-96 border border-slate-200' type="text" name="message" id="message" value={liveMessage} />
                <button className='p-2 bg-slate-200 rounded-full mr-1'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className='w-4 h-4'
                    >
                        <path d="M6.185 4.843L18.112 12 6.185 19.157 9.167 12 6.185 4.843zM2 0l5 12-5 12 20-12L2 0z"></path>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default LiveChat;