import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>
}

export const generateMetadata = async (x:Props):Promise<Metadata>=>{
    const {id} = await x.params;
    return {
        title: "User page "+id+" title"
    }
}

const IdPage:FC<Props> = async ({ searchParams}) => {
    const {data} = await searchParams;
    let obj:IUser | null = null;
    if (typeof data === "string"){
        obj = JSON.parse(data) as IUser;
    }
    return (
        <div>
            {obj?.id}. {obj?.name}
        </div>
    );
};

export default IdPage;