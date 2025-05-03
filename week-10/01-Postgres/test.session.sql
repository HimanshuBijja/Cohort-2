CREATE TABLE users (
    id serial primary key,
    email VARCHAR(255) UNIQUE not NULL,
    user_password VARCHAR(255) not NULL 
);


CREATE TABLE todo(
    id serial PRIMARY KEY,
    title TEXT  NOT NULL,
    description TEXT,
    userid INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
);


drop TABLE users;
drop table todo;

INSERT INTO users (email, user_password)  VALUES ($1, $2) RETURNING id;