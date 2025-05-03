import { getClient } from "./utils";

async function updateTodos(todoid : number){
    const client = await getClient();

    const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2'
    await client.query(updateTodoText, [true, todoid])

    console.log(`Todo with Id: ${todoid} updated to done`);
    await client.end();
}

updateTodos(2);