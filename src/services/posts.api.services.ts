import {IPost} from "@/models/IPost";
import {urlsPH} from "@/constants/urls";

export const getAllPosts = async ():Promise<IPost[]>=>{
    return await fetch(urlsPH.posts.allPosts).then(value => value.json());
};
export const getPostById = async (id:number):Promise<IPost>=>{
    return await fetch(urlsPH.posts.byId(id)).then(value => value.json());
};