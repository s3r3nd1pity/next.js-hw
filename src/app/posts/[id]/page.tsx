import {FC} from "react";
import SinglePostComponent from "@/components/posts/SinglePostComponent";

const SinglePostPage: FC<PropsType> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <SinglePostComponent id={id}/>
        </div>
    );
};

export default SinglePostPage;