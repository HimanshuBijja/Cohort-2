import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function useInterval(fn, timer){

    useEffect(()=>{
        const value = setInterval(() => {
            fn();
        }, timer);

        return () =>{
            clearInterval(value);
        }
    },[fn, timer])
}

function App() {

    const [count, setCount] = useState(0);

    useInterval(()=>{
        setCount (c => c+1)
    }, 1000)

    return (
        <div className=" h-screen flex flex-col items-center justify-center text-center">
            Timer is at {count}
        </div>
    )
}

export default App;
