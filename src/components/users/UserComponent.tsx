import {IUser} from "@/models/IUser";
import {FC} from "react";

type UserPropsType = {
    user:IUser
};

const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.name}
        </div>
    );
};

export default UserComponent;