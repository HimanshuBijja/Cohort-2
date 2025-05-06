import { Client } from "pg";

export async function getClient() {
	const client = new Client("Connection string");
	await client.connect();
	return client;
}
