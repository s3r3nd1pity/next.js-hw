import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/cars"}>All cars</Link>
                </li><li>
                    <Link href={"/addCar"}>Add car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;