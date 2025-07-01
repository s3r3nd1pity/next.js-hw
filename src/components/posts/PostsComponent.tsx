'use client';

import {useEffect, useState} from "react";
import {IPost} from "@/models/IPost";
import {getAllPosts} from "@/services/posts.api.services";
import Link from "next/link";
import PostComponent from "@/components/posts/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAllPosts().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts && posts.map(value => <Link href={"/posts/" + value.id} key={value.id}><PostComponent post={value}
                                                                                                           key={value.id}/></Link>)
            }
        </div>
    );
};

export default PostsComponent;