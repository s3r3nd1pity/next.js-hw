export async function GET(request:Request, response:Response){
    // const users = await fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(value => value.json());
    response.headers.set("HI","BYE");
    return Response.json({message:request.url, status:200});
}

export async function POST(){
    return Response.json({message:"HIIIIIIIIIIIII"})
}