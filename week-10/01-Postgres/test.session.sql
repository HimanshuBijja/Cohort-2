CREATE TABLE users (
    id serial primary key,
    email VARCHAR(255) UNIQUE not NULL,
    user_password VARCHAR(255) not NULL 
);


CREATE TABLE todos(
    id serial PRIMARY KEY,
    title TEXT  NOT NULL,
    description TEXT,
    userid INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
);


drop TABLE users;
drop table todos;

INSERT INTO users (email, user_password)  VALUES ($1, $2) RETURNING id;
INSERT INTO todos (title, description, userid, done) values ($1, $2, $3, $4) RETURNING id;

SELECT * FROM users;
SELECT * FROM users WHERE email = $1;
