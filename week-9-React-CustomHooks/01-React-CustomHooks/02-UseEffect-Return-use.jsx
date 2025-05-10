import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(r => !r);
    }, 1000);
  }, []);

  return (
    <div className=" h-screen flex items-center justify-center">
      {render ? <MyComponent /> : <div> unmounted </div>}
    </div>
  );
}

function MyComponent() {
  useEffect(() => {
    console.error("Inside useEffect");

    return () => {
      console.log("Inside return");
    };
  }, []);

  return <div>Inside component</div>;
}

export default App;
