import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

const UsersComponent = async () => {
    const users = await getAllUsers()
    return (
        <div>
            {
                users.map(value => <div key={value.id}>
                    <Link href={{pathname:"/users/" + value.id, query:{data:JSON.stringify(value)}}}>{value.name}</Link>
                </div>)
            }
        </div>
    );
};

export default UsersComponent;