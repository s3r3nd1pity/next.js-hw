import {urlsPH} from "@/constants/urls";
import {IComment} from "@/models/IComment";

export const getAllComments = async (): Promise<IComment[]> => {
    return await fetch(urlsPH.comments.allComments).then(value => value.json());
};
export const getCommentById = async (id: number): Promise<IComment> => {
    return await fetch(urlsPH.comments.byId(id)).then(value => value.json());
};