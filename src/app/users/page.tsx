import {IUser} from "@/models/IUser";

const UsersPage = async () => {
    const users:IUser[] = await fetch("http://localhost:3000/users/api").then(value => value.json());
    return (
        <div>
            {
                users && users.map(value=><div key={value.id}>{value.name}</div>)
            }
        </div>
    );
};

export default UsersPage;