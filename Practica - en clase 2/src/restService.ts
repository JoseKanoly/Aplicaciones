interface IPost{
    userID: number;
    id: number;
    tittle: string;
    body: string;
}
async function fetchData(url: string):Promise IPost[]>{
    try {
        
    } catch (error) {
        
    }
    return fetchData(url)
    .then(response =>response.json());
}
export{

}


