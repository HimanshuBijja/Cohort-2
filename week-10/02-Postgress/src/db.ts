import { Client } from "pg";

export async function GetClient() {
	const client = new Client(
		"postgresql://neondb_owner:npg_AqtoVP48IBcY@ep-shrill-thunder-a496z1tz-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
	);
	await client.connect();
	return client;
}
