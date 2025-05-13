import axios from "axios";

interface blogpostType {
    params : Promise<{
        blogid : string
    }>
}

interface dataType {
    id : number,
    title : string,
    body : string
}

export default async function Blogpost({params} : blogpostType){
    // console.log(params);
    
    const blogid = (await params).blogid;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogid}`)
    const {id, title, body} = response.data as dataType;
    return (
        <div className="flex flex-col gap-4">
            blog post  {id}
            <div className="text-amber-800">
                {title}
            </div>
            <div className="px-[25%]">
                {body}
            </div>
        </div>
    )
}