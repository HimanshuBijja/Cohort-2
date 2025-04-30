import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMovement = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMovement);

        return () => {
            window.removeEventListener("mousemove", (e) => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            });
        };
    }, []);

    return position;
};

function App() {
    const mousePointer = useMousePointer();

    return (
        <div className=" h-screen flex flex-col items-center justify-center text-center">
            Mouse Location: {mousePointer.x + " " + mousePointer.y}
        </div>
    );
}

export default App;
