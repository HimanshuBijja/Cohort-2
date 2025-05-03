import { getClient } from "./utils";

async function createEntries() {
	const client = await getClient();

	const insertUserText = `INSERT INTO users (email, user_password)  VALUES ($1, $2) RETURNING id;`;
	const userValues = ["abc@123", "password"];

	let response = await client.query(insertUserText, userValues);

    const insertTodoText = `INSERT INTO todos (title, description, userid, done) values ($1, $2, $3, $4) RETURNING id`;
	const todoValues = ["Buy groceries", "Milk, Bread and eggs", response.rows[0].id, false ];

    await client.query(insertTodoText, todoValues);
    console.log("Entries Created");

    await client.end();
}

createEntries();
