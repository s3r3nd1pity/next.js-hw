import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={"/"}>home</Link>
                </li>
                <li>
                    <Link href={"/about"}>abt</Link>
                </li>
                <li>
                    <Link href={"/users"}>users</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;