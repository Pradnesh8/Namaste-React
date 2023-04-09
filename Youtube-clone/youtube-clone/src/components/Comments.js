import React, { useCallback, useEffect, useRef, useState } from 'react';
import { YOUTUBE_COMMENTS_API } from '../utils/config';
import Shimmer from './Shimmer';
import parse from 'html-react-parser';
const Comment = ({ data }) => {
    const { snippet } = data
    const { textDisplay, authorDisplayName, authorProfileImageUrl, likeCount } = snippet
    return (
        // TODO : Responsivenes
        // TODO : Toggle commentslist
        // TODO : Add expansion for reply
        console.log("data in Comment", data),
        <div className='flex gap-3 mt-2'>
            <img src={authorProfileImageUrl} alt="profile" className='h-10 w-10 rounded-full' />
            <div className="comment w-full px-2 text-sm flex flex-col gap-1 md:w-[55vw] break-words">
                <span className='name font-medium'>{authorDisplayName}</span>
                <span className='text font-normal'>
                    {parse(textDisplay)}
                </span>
            </div>
        </div>
    )
}

const CommentReplyList = ({ commentInfo }) => {
    const { comments } = commentInfo;
    return (
        console.log("data in CommentReplyList", commentInfo),
        comments.map((comment) =>
            <Comment data={comment} key={comment?.id} />
        )
    )
}

const CommentReplySection = ({ comment }) => {
    const [showReply, setShowReply] = useState(false);
    return (
        <div className='flex flex-col gap-1'>
            <div className='ml-14 mt-2 text-sm w-fit cursor-pointer px-2 py-1 rounded-3xl text-blue-600 bg-blue-100' onClick={() => setShowReply(!showReply)}>
                {
                    !showReply ? "▼ " : "▲ "
                }
                replies</div>
            {
                showReply &&
                <div className='pl-5 border border-l-black border-r-0 border-t-0 border-b-0 ml-5'>
                    <CommentReplyList commentInfo={comment.replies} />
                </div>
            }
        </div>
    )
}
const CommentsList = ({ videoId }) => {
    const observer = useRef();
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState("");
    const [commentsData, setCommentsData] = useState([]);

    const getCommentsData = async () => {
        setLoading(true)
        const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
        const json = await data.json();
        setNextPageToken(json?.nextPageToken);
        setCommentsData(json.items);
        setLoading(false);
    }
    const getNextPageCommentsData = async (pageToken) => {
        setLoading(true)
        const data = await fetch(YOUTUBE_COMMENTS_API + videoId + "&pageToken=" + pageToken);
        const json = await data.json();
        setNextPageToken(json?.nextPageToken);
        setCommentsData(prevComments => [...prevComments, ...json.items]);
        setLoading(false);
    }
    const lastComment = useCallback((node) => {
        // if loading return
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextPageToken) {
                getNextPageCommentsData(nextPageToken);
            }
        })
        if (node) observer.current.observe(node)
    })
    useEffect(() => {
        getCommentsData();
    }, [videoId]);

    if (commentsData?.length === 0) return <Shimmer id={"commentPage"} /> //show Shimmer
    return (
        <>

            {commentsData?.map((comment, index) => {
                return (
                    commentsData.length === index + 1 ?
                        <div ref={lastComment} key={comment?.id} className="mt-4" >
                            <Comment data={comment?.snippet?.topLevelComment} />
                            {
                                comment?.snippet?.totalReplyCount > 0 &&
                                <CommentReplySection comment={comment} />
                                // <div className='pl-5 border border-l-black border-r-0 border-t-0 border-b-0 ml-5'>
                                //     <CommentReplyList commentInfo={comment.replies} />
                                // </div>
                            }
                        </div>
                        :
                        <div key={comment?.id} className="mt-4" >
                            <Comment data={comment?.snippet?.topLevelComment} />
                            {
                                comment?.snippet?.totalReplyCount > 0 &&
                                <CommentReplySection comment={comment} />
                                // <div className='pl-5 border border-l-black border-r-0 border-t-0 border-b-0 ml-5'>
                                //     <CommentReplyList commentInfo={comment.replies} />
                                // </div>
                            }
                        </div>
                )
            })
            }
            {loading && <Shimmer id={"commentPage"} />}
        </>
    )
}

const Comments = ({ commentCount, videoId }) => {
    const [viewComments, setViewComments] = useState(false);
    // const [commentsData, setCommentsData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // const getCommentsData = async () => {
    //     setLoading(true)
    //     const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
    //     const json = await data.json();
    //     setCommentsData(json.items);
    //     setLoading(false);
    // }
    // useEffect(() => {
    //     getCommentsData();
    // }, [videoId]);
    const formatter = new Intl.NumberFormat("en-US");
    // if (loading) return null
    return (
        <div className='mt-5'>
            {/* Toggle Comments for Mobile */}
            {
                viewComments ?
                    <div className='md:hidden'>
                        <div className='flex justify-between border border-b-gray-200 p-2'>
                            <span className='font-bold text-lg'>Comments</span>
                            <span className='cursor-pointer p-1' onClick={() => {
                                console.log("Close")
                                setViewComments(false);
                            }}>✕</span>
                        </div>
                        <div className='h-[40vh] overflow-x-hidden overflow-y-auto border border-b-gray-200 mb-3'>
                            <CommentsList videoId={videoId} />
                        </div>
                    </div> :
                    <div className='md:hidden flex cursor-pointer justify-between px-2'>
                        <span>
                            {formatter.format(commentCount)} Comments
                        </span>
                        <span onClick={() => {
                            setViewComments(!viewComments);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><path d="M12,21.7l-6.4-6.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,21.7z M18.4,8.6L12,2.3L5.6,8.6l0.7,0.7L12,3.7l5.6,5.6L18.4,8.6z"></path></svg>
                        </span>
                    </div>

            }
            {/* Desktop remove toggle */}
            <div className='hidden md:block'>
                {formatter.format(commentCount)} Comments
            </div>
            {/* Desktop commentsList */}
            <div className='mt-3 hidden md:block'>
                <CommentsList videoId={videoId} />
            </div>
        </div>
    )
}

export default Comments;