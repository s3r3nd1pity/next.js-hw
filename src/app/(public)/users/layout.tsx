import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Users metadata",
};

type PropsType = {children:React.ReactNode};

const UsersLayout = ({children}:PropsType) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UsersLayout;