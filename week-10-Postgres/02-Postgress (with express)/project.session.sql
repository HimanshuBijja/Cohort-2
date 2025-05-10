CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(39) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

SELECT * from users;

UPDATE users
SET user_password = 'updated_1'
WHERE email = 'adaf';


CREATE TABLE todos(
    id serial PRIMARY KEY,
    todo TEXT NOT NULL,
    todo_description TEXT,
    done BOOLEAN DEFAULT FALSE
);


INSERT INTO todos (todo, todo_description) VALUES ($1, $2);