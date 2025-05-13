import axios from "axios";

interface blogpostType {
    params :Promise< {
        catchall : string
    }>
}


export default async function Blogpost({params} : blogpostType){
    // console.log(params);
    
    const blogid = (await params).catchall;
    
    return (
       <div>
            {blogid[0]}
       </div>
    )
}