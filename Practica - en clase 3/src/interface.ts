
interface IPost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

// async function fetchData(url:string): Promise<IPost[]>{
//     return fetch(url)
//         .then (response => response.json());
// }

async function fetchData(url:string): Promise<IPost[]>{
    try {
        const response= await fetch(url)
        return response.json();
    }catch (error){
        throw(error)
    }
}

export {
    IPost,
    fetchData
};
