import React from 'react';
import profilePhoto from '../assets/profile.jpg';
const commentsData = [
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Akshay Saini",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Akshay Saini",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];

const Comment = ({ data }) => {
    return (
        <div className='flex gap-3 mt-2'>
            <img src={profilePhoto} alt="profile" className='h-10 w-10 rounded-full' />
            <div className="comment text-sm flex flex-col gap-1">
                <span className='name font-medium'>{data.name}</span>
                <span className='text font-normal'>{data.text}</span>
            </div>
        </div>
    )
}

const CommentsList = ({ commentsInfo }) => {
    return (
        commentsInfo.map((comment) => {
            return (
                <div key={crypto.randomUUID()} className="mt-4">
                    <Comment data={comment} />
                    <div className='pl-5 border border-l-black border-r-0 border-t-0 border-b-0 ml-5'>
                        <CommentsList commentsInfo={comment.replies} />
                    </div>
                </div>
            )
        })
    )
}

const Comments = ({ views }) => {
    const formatter = new Intl.NumberFormat("en-US");
    return (
        <div className='mt-5'>
            <div>
                {formatter.format(views)} Comments
            </div>
            <div className='mt-3'>
                <CommentsList commentsInfo={commentsData} />
            </div>
        </div>
    )
}

export default Comments;