import express from "express";
import { GetClient } from "./db";

const app = express();
app.use(express.json());

app.post("/sql", async (req, res) => {
	const todo = req.body;
	const client = await GetClient();

	const query = "INSERT INTO todos (todo, todo_description) VALUES ($1, $2);";
	await client.query(query, [todo.todo, todo.description]);

	res.json({
		msg: "successfully added",
	});
	await client.end();

});

app.listen(3000, () => {
	console.log(`connected on 3000`);
});

// async function queries() {
// 	const client = await GetClient();

// 	const query = "SELECT * from users;";
// 	const res = await client.query(query);
// 	console.log(res.rows);

// 	await client.end();
// }

// queries();
