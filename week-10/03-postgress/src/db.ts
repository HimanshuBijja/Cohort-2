import { Client } from "pg";

export async function GetClient() {
    const client = new Client("Connection String");
    client.connect();
    return client;
}