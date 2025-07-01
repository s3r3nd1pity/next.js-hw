import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Id metadata",
};

type PropsType = {children:React.ReactNode};

const IdLayout = ({children}:PropsType) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default IdLayout;