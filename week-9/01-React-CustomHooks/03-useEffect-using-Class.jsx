import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [render, setRender] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRender((r) => !r);
        }, 1000);
    }, []);

    return (
        <div className=" h-screen flex items-center justify-center">
            {render ? <MyComponent /> : <div> unmounted </div>}
        </div>
    );
}

class MyComponent extends React.Component {
    componentDidMount() {
        console.log("mounted");
    }
    componentWillUnmount() {
        console.log("unmounted");
    }

    render() {
        return <div>Hello</div>;
    }
}

export default App;
