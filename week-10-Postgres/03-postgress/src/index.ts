import express from "express";
const app = express();
import { GetClient } from "./db";

app.use(express.json());

app.post("/signup", async (req, res) => {
	const { username, email, user_password, street, city, state, pincode } =
		req.body;
	const client = await GetClient();

	try {
		await client.query("BEGIN");
		const insertQuery =
			"INSERT INTO users (username, email, user_password) VALUES ($1, $2, $3) RETURNING id;";

		const returnedId = await client.query(insertQuery, [
			username,
			email,
			user_password,
		]);
		const user_id = returnedId.rows[0].id;

		const addressInsertQuery =
			"INSERT INTO user_address (user_id, street, city, state, pincode) VALUES ($1, $2, $3, $4, $5);";
		await client.query(addressInsertQuery, [
			user_id,
			street,
			city,
			state,
			pincode,
		]);

		await client.query("COMMIT");

		res.json({
			msg: "Account Signup Successful",
		});
	} catch (e: unknown) {
		await client.query("ROLLBACK");
		res.json({
			msg: "Error at parsing query",
			err: e instanceof Error ? e.message : String(e),
		});
	} finally {
		await client.end();
	}
});

app.get("/metadata", async (req, res) => {

	const userid = req.query.id;
	const getQuery = `
			SELECT username, email, street, city, state, pincode FROM users
			LEFT JOIN user_address ON users.id = user_address.user_id
			where users.id = $1;
		`;
	try {
		const client = await GetClient();
		const result = await client.query(getQuery, [userid]);
		
		await client.end();

		res.json({
			result : result.rows,
		});
	} catch (e: unknown) {
		error: e instanceof Error ? e.message : String(e);
	}
});

app.listen(3000, () => {
	console.log("Listening on 3000");
});
