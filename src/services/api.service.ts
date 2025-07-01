import {urlsPH} from "@/constants/urls";
import {IUser} from "@/models/IUser";

export const getAllUsers = async (): Promise<IUser[]> => {
    return await fetch(urlsPH.users.allUsers).then(value => value.json());
}
export const getUserById = async (id: number): Promise<IUser> => {
    return await fetch(urlsPH.users.byId(id)).then(value => value.json());
}