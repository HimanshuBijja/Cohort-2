-- CREATE`
-- `
--
--
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE user_address (
    id serial PRIMARY KEY,
    user_id INTEGER NOT NULL,
    street TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode VARCHAR(7) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
--
--
--
--
-- INSERT

INSERT INTO users (username, email, user_password)
VALUES ('himanshu', 'himanshu@123', 'pass')
RETURNING id;
INSERT INTO user_address (user_id, street, city, state, pincode)
VALUES (2, 'Street-3', 'Hyd', 'Ts', '500076');
--
--
--
--
--
-- SELECT
SELECT *
FROM users;
SELECT *
FROM user_address;
--joins
--
--
--
--
SELECT username,
    email,
    street,
    city,
    state,
    pincode
FROM users
    LEFT JOIN user_address ON users.id = user_address.user_id
where users.id = 4;
-- TYPE two
--
SELECT u.username,
    u.email,
    a.street,
    a.city,
    a.state,
    a.pincode
FROM users u
    LEFT JOIN user_address a ON u.id = a.user_id
where u.id = 4;
--
SELECT *
FROM users
    CROSS JOIN user_address;