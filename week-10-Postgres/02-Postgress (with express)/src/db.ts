import { Client } from "pg";

export async function GetClient() {
	const client = new Client(
		"connection string"
	);
	await client.connect();
	return client;
}
