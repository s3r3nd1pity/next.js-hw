import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params:{id:string}
}

export const generateMetadata = async (x:Props):Promise<Metadata>=>{
    const {id} = await x.params;
    return {
        title: "User page "+id+" title"
    }
}

const IdPage:FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            {id}
        </div>
    );
};

export default IdPage;