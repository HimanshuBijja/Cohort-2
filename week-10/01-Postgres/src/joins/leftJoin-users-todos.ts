import { getClient } from "../utils";

async function getUserAndTodos(userId : number){
    const client = await getClient();

    const query = `
            SELECT users.*, todos.title, todos.description
            FROM users
            LEFT JOIN todos ON users.id = todos.userid
            where users.id = $1;
    `

    const res = await client.query(query, [userId]);

    res.rows.map(user => {
        console.log(`ID: ${user.id}  Title: ${user.title} `)
    })
    // console.log(res.rows);

    await client.end();
}

getUserAndTodos(1);

