import {IPost} from "@/models/IPost";
import {FC} from "react";

type PostPropsType = {
    post:IPost;
};

const PostComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title}
        </div>
    );
};

export default PostComponent;