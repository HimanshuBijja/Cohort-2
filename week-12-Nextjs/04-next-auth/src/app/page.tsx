"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home(){
  return(
    <SessionProvider>
        <Subpage/>
    </SessionProvider>
  )
}


function Subpage(){
    const session = useSession();

    if(session.status === "authenticated"){
        return(
            <div>
                <button onClick={()=>{
                    signOut()
                }}>signout</button>
            </div>
        )
    }

    return(
        <div>
                <button onClick={()=>{
                    signIn()
                }}>Login</button>
        </div>
    )
}