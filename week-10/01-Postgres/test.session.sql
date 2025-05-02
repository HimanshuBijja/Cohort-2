CREATE TABLE Users (
    id serial primary key,
    email VARCHAR(255) UNIQUE not NULL,
    PASSWORD VARCHAR(255) not NULL 
);

CREATE TABLE todo(
    id serial PRIMARY KEY,
    title TEXT  NOT NULL,
    description TEXT,
    userid INTEGER REFERENCES user(id),
    done BOOLEAN DEFAULT FALSE
);


drop TABLE users;
drop table todo
