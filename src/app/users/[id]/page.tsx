import {FC} from "react";
import SingleUserComponent from "@/components/users/SingleUserComponent";

const SingleUserPage:FC<PropsType> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <SingleUserComponent id={id}/>
        </div>
    );
};

export default SingleUserPage;