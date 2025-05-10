import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function useIsOnline(){

    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setIsOnline(true);
        })
        window.addEventListener("offline", ()=>{
            setIsOnline(false);
        })
        
    }, []);


    return isOnline;
}

function App() {

    const status = useIsOnline();
    
    if(!status){
        return (
            <div className=" h-screen flex flex-col items-center justify-center text-center">
                Statue: Offline
            </div>
        )
    }

    return (
        <div className=" h-screen flex flex-col items-center justify-center text-center">
            online
        </div>
    );
}

export default App;
