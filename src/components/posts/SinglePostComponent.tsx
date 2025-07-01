'use client';

import {useEffect, useState} from "react";
import {IPost} from "@/models/IPost";
import {getPostById} from "@/services/posts.api.services";

const SinglePostComponent = ({id}: { id: number }) => {
    const [post, setPost] = useState<IPost>();
    useEffect(() => {
        getPostById(id).then(value => setPost(value));
    }, []);
    return (
        <div>
            <div className="text-sm text-gray-500 mb-2">User ID: {post?.userId} • Post ID: {post?.id}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{post?.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{post?.body}</p>
        </div>
    );
};

export default SinglePostComponent;