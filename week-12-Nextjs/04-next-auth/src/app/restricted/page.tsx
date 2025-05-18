

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";


export   default async function restri(){
    const session = await getServerSession();
    if(!session){
        redirect("/")
    }
    console.log(session)
    return (
        <div>
            Success
        </div>
    )
}