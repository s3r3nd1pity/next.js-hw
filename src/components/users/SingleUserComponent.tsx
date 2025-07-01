'use client';

import {useEffect, useState} from "react";
import {getUserById} from "@/services/users.api.services";
import {IUser} from "@/models/IUser";

const SingleUserComponent = ({id}: { id: number }) => {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        getUserById(id).then(value => setUser(value));
    }, []);
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{user?.name} <span
                    className="text-gray-500 text-base">(@{user?.username})</span></h2>
                <p className="text-sm text-blue-600">{user?.email}</p>
                <p className="text-sm text-gray-600">{user?.phone} • {user?.website}</p>
            </div>

            <div className="text-sm text-gray-700">
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p>{user?.address?.suite}, {user?.address?.street}</p>
                <p>{user?.address?.city}, {user?.address?.zipcode}</p>
                <p className="text-xs text-gray-500">Geo: {user?.address?.geo?.lat}, {user?.address?.geo?.lng}</p>
            </div>

            <div className="text-sm text-gray-700">
                <h3 className="font-semibold text-gray-900 mb-1">Company</h3>
                <p className="font-medium">{user?.company?.name}</p>
                <p className="italic text-gray-600">"{user?.company?.catchPhrase}"</p>
                <p className="text-xs text-gray-500">{user?.company?.bs}</p>
            </div>
        </div>
    );
};

export default SingleUserComponent;