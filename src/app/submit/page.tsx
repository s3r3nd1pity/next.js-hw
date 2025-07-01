import {FC} from "react";

type PropsType = {
    searchParams: Promise<{
        [key:string]:string | string[] | undefined
    }>
}

const SubmitPage:FC<PropsType> = async ({searchParams}) => {
    const awaitedSP = await searchParams;

    return (
        <div>
            {
                awaitedSP && awaitedSP.name
            }
        </div>
    );
};

export default SubmitPage;