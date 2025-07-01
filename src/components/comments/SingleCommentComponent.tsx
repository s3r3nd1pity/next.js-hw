'use client';

import {useEffect, useState} from "react";
import {IComment} from "@/models/IComment";
import {getCommentById} from "@/services/comments.api.services";

const SingleCommentComponent = ({id}:{id:number}) => {
    const [comment, setComment] = useState<IComment>();
    useEffect(() => {
        getCommentById(id).then(value => setComment(value));
    }, []);
    return (
        <div>
            <div className="text-sm text-gray-500 mb-1">Post ID: {comment?.postId} • Comment ID: {comment?.id}</div>
            <h2 className="text-lg font-semibold text-gray-800">{comment?.name}</h2>
            <p className="text-sm text-blue-600 mb-2">{comment?.email}</p>
            <p className="text-gray-700 whitespace-pre-line">{comment?.body}</p>
        </div>
    );
};

export default SingleCommentComponent;