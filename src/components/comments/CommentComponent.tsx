import {IComment} from "@/models/IComment";
import {FC} from "react";

type CommentPropsType = {
    comment: IComment;
};

const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            {comment.id}. {comment.body}
        </div>
    );
};

export default CommentComponent;