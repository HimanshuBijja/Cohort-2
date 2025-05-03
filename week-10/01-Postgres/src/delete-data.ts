import { getClient } from "./utils";

async function deleteTodos(todoid : number){
    const client = await getClient();

    const deleteTodoText = `DELETE FROM todos WHERE id = $1`;
    await client.query(deleteTodoText, [todoid]);

    console.log(`Todo with Id: ${todoid} is Deleted`);
    await client.end();
}

deleteTodos(2);

