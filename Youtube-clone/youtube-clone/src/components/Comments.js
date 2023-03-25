import React, { useCallback, useEffect, useRef, useState } from 'react';
import { YOUTUBE_COMMENTS_API } from '../utils/config';
import Shimmer from './Shimmer';

const Comment = ({ data }) => {
    const { snippet } = data
    const { textDisplay, authorDisplayName, authorProfileImageUrl, likeCount } = snippet
    return (
        console.log("data in Comment", data),
        <div className='flex gap-3 mt-2'>
            <img src={authorProfileImageUrl} alt="profile" className='h-10 w-10 rounded-full' />
            <div className="comment text-sm flex flex-col gap-1 w-[55vw] break-words">
                <span className='name font-medium'>{authorDisplayName}</span>
                <span className='text font-normal'>{textDisplay}</span>
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

    if (commentsData.length === 0) return <Shimmer id={"commentPage"} /> //show Shimmer
    return (
        <>

            {commentsData.map((comment, index) => {
                return (
                    commentsData.length === index + 1 ?
                        <div ref={lastComment} key={comment?.id} className="mt-4" >
                            <Comment data={comment?.snippet?.topLevelComment} />
                            {
                                comment?.snippet?.totalReplyCount > 0 &&
                                <div className='pl-5 border border-l-black border-r-0 border-t-0 border-b-0 ml-5'>
                                    <CommentReplyList commentInfo={comment.replies} />
                                </div>
                            }
                        </div>
                        :
                        <div key={comment?.id} className="mt-4" >
                            <Comment data={comment?.snippet?.topLevelComment} />
                            {
                                comment?.snippet?.totalReplyCount > 0 &&
                                <div className='pl-5 border border-l-black border-r-0 border-t-0 border-b-0 ml-5'>
                                    <CommentReplyList commentInfo={comment.replies} />
                                </div>
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
            <div>
                {formatter.format(commentCount)} Comments
            </div>
            <div className='mt-3'>
                <CommentsList videoId={videoId} />
            </div>
        </div>
    )
}

export default Comments;