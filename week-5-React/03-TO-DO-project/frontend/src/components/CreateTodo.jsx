import { useState } from "react";


export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="Title" onChange={(e)=>{
            const target = e.target.value
            setTitle(target);
        }} style={{
            padding:10,
            margin : 10
        }}/> <br />
        <input type="text" placeholder="Description" onChange={(e)=>{
            const target = e.target.value
            setDescription(target);
        }} style={{
            padding :10,
            margin : 10
        }}/> <br />

        <button style={{
            padding : 10,
            margin : 10
        }} onClick={async ()=>{
            const res = await fetch("http://localhost:3000/todo",{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            const json = await res.json();
            alert("Added todos");

        }}>Add a todo</button>
    </div>
}