import { Client } from "pg";

export async function GetClient() {
    const client = new Client("postgresql://postgres:123@localhost:5432/postgres03");
    client.connect();
    return client;
}