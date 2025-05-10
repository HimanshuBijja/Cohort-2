export function RenderTodos({arr}){
    return <div>

    {
        arr.map( (todos) =>{
            return <div>
                <h1>{todos.title} </h1>
                <h2> {todos.description} </h2>
            </div>
        })
    }
    </div>
}