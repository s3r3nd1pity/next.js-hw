import {NextRequest, NextResponse} from "next/server";

export const middleware = (request:NextRequest) => {
    console.log("сфе");

    // const token = "tokennnnnnnnnnnnnn";
    // const response = NextResponse.next({
    //     headers:{
    //         Authorization : token
    //     }
    // })

    // return new NextResponse("hiop", {headers:{"xx":"xxx"}})

    // if (request.url.startsWith("/api/")){
    //     console.log("api")
    // }
    // else if (request.url.startsWith("/hi?")){}
};

//Реагирует на:
// export const config = {
//     matcher:"/path"
// }

