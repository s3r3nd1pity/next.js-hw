import {FC} from "react";
import SingleCommentComponent from "@/components/comments/SingleCommentComponent";

const SingleCommentPage:FC<PropsType> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <SingleCommentComponent id={id}/>
        </div>
    );
};

export default SingleCommentPage;