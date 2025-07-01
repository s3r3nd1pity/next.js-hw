import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About metadata",
};

type PropsType = {children:React.ReactNode};

const AboutLayout = ({children}:PropsType) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AboutLayout;