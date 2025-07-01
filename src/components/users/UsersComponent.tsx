'use client';

import {useEffect, useState} from "react";
import {IUser} from "@/models/IUser";
import {getAllUsers} from "@/services/users.api.services";
import Link from "next/link";
import UserComponent from "@/components/users/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users && users.map(value => <Link href={"/users/" + value.id} key={value.id}><UserComponent user={value} key={value.id}/></Link>)
            }
        </div>
    );
};

export default UsersComponent;