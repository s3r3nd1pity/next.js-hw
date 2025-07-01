'use client';

import {useEffect, useState} from "react";
import {IComment} from "@/models/IComment";
import {getAllComments} from "@/services/comments.api.services";
import Link from "next/link";
import CommentComponent from "@/components/comments/CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getAllComments().then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments && comments.map(value => <Link href={"/comments/" + value.id} key={value.id}><CommentComponent
                    comment={value} key={value.id}/></Link>)
            }
        </div>
    );
};

export default CommentsComponent;