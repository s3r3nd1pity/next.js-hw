export const jsonPHBaseUrl = "https://jsonplaceholder.typicode.com";
export const urlsPH = {
    users: {
        allUsers: jsonPHBaseUrl + "/users",
        byId: (id: number) => jsonPHBaseUrl + "/users/" + id,
    },
    posts: {
        allPosts: jsonPHBaseUrl + "/posts",
        byId: (id: number) => jsonPHBaseUrl + "/posts/" + id,
    },
    comments: {
        allComments: jsonPHBaseUrl + "/comments",
        byId: (id: number) => jsonPHBaseUrl + "/comments/" + id,
    }
};