import { Client } from "pg";

export async function getClient() {
	const client = new Client("postgresql://postgres:123@localhost:5432/demo");
	await client.connect();
	return client;
}
