import { useState } from "react"


function App() {

  const [todo, setTodo] = useState([{
    title : "go to gym",
    description : "go to gym frm 7-9",
    completed : false
    
  },{
    title : "Study dsa",
    description : "Study Dsa from 9=100",
    completed : true
  }]);

  function addTodo(){
    setTodo([...todo, {
      title : "new todo",
      description : "new description"
    }])
  }

  return(
    <div>
      <button onClick={addTodo}> Add a random todo</button>
      {todo.map(function(todos){
        return <Todo title = {todos.title} description = {todos.description} />
      })}
    </div>
  )
}

function Todo(props){
  
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description} </h2>
  </div>
}

export default App 


