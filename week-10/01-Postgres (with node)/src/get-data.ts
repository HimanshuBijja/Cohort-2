import { getClient } from "./utils";

async function getUsers() {
	const client = await getClient();

	const selectUserText = `SELECT * FROM users`;
	const userRef = await client.query(selectUserText);

	console.log("Users :");
	for (let user of userRef.rows) {
		console.log(`ID: ${user.id} Email: ${user.email}`);
	}
	await client.end();
}

async function getUserFromEmail(email: string) {
	const client = await getClient();
	const selectUsers = `SELECT * FROM users WHERE email = $1`;
	const userRef = await client.query(selectUsers, [email]);

	console.log(`\nSingle user Details :`);
	for (let user of userRef.rows) {
		console.log(`ID: ${user.id} Email: ${user.email}`);
	}

	await client.end();
}

async function getTodosFromUser(userId: number) {
	const client = await getClient();
	const selectTodoText = `SELECT * FROM todos WHERE userid = $1`;
	const userRef = await client.query(selectTodoText, [userId]);

	console.log(`\nTodos for User ID ${userId}:`);
	for (let todo of userRef.rows) {
		console.log(`ID: ${todo.id} Title: ${todo.title} Description: ${todo.description} Done: ${todo.done}`);
	}

	await client.end();
}
getUsers();
getUserFromEmail("abc@123");
getTodosFromUser(4);