import "./App.css";
import React, { useEffect, useState } from "react";
import axios, { } from "axios";

function useTodos(){
	const [todos, setTodos] = useState([]);

	useEffect(()=>{
		axios.get("http://localhost:3000/todos")
		.then(result => {
			setTodos(result.data.todos)
		})
	},[])

	return todos;
}

function App() {
	const todos = useTodos();

	return (
		<div className=" h-screen flex flex-col items-center justify-center text-center">
			{todos.map(x => <RenderTodos todo={x}/>)}
			
		</div>
	);
}


function RenderTodos({todo}){
	return (
		<div className="mb-10">
			{todo.title} <br />
			{todo.description} <br />

		</div>
	)
}

export default App