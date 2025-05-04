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

INSERT INTO user_address (user_id, street, city, state, pincode) 
VALUES (1, 'a', 'a', 'a', 'a')