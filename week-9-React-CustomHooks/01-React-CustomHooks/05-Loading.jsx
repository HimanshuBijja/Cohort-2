import "./App.css";
import React, { useEffect, useState } from "react";
import axios, { } from "axios";

function useTodos(){
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		setTimeout(()=>{

			axios.get("http://localhost:3000/todos")
			.then(result => {
				setTodos(result.data.todos)
				setLoading(false)
			})
		}, 2000)
	},[])

	return {todos, loading};
}



function App() {
	const {todos, loading} = useTodos();
	

	if(loading){
		return(
			<div className=" h-screen flex flex-col items-center justify-center text-center">
				loading...
			</div>
		)
	}
	
	return (
		<div className=" h-screen flex flex-col items-center justify-center text-center">

			{todos.map((x, index) => <RenderTodos todo={x} key={index}/>)}
			
			
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