import { getClient } from "./utils";

async function createTable() {

    const cilent = await getClient();

	const createUserTableQuery = `
        CREATE TABLE users (
            id serial primary key,
            email VARCHAR(255) UNIQUE not NULL,
            user_password VARCHAR(255) not NULL 
        );

    `;
    
   await cilent.query(createUserTableQuery)

   const createTodosQuery =  `
        CREATE TABLE todos(
            id serial PRIMARY KEY,
            title TEXT  NOT NULL,
            description TEXT,
            userid INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );

   `

   await cilent.query(createTodosQuery);
   console.log("Table created successfully");
   await cilent.end();
}

createTable();