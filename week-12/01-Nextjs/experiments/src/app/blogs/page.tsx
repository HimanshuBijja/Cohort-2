"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Blogs() {
  type todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    axios.get<todo[]>("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);
  return <div className="flex justify-center">
    <div className="flex flex-col w-fit items-center">
    hello
    {todos.map((todo, index) => 
        <RenderTodos key={index} title={todo.title} completed={todo.completed}/>
    )}
    </div>
  </div>;
}

interface renderTodoType {
    title : string,
    completed : boolean
}

function RenderTodos({title, completed}: renderTodoType){
    return(
        <div className="border-2 rounded-2xl px-2 m-3 py-4 text-center flex flex-col items-center justify-center  bg-white" >
            <div className="">
                {title} 
            </div>
            <div className="px-2 py-1 border-2 rounded-4xl max-w-fit bg-slate-800 text-amber-200 border-slate-800">
                {completed? "Completed" : "Pending"}
                {true}
            </div>
        </div>
    )
}
 