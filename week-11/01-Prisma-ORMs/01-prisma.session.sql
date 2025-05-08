-- INSERT INTO "User" (username, password, age) VALUES
-- ('alice', 'alice123', 25),
-- ('bob', 'bob123', 30),
-- ('charlie', 'charlie123', 28),
-- ('diana', 'diana123', 22),
-- ('eric', 'eric123', 35);
-- Alice (id = 1)
INSERT INTO "todo" (title, description, done, userId)
VALUES (
        'Buy milk',
        'Get whole milk from the store',
        false,
        17
    ),
    (
        'Call mom',
        'Check in with mom about weekend',
        false,
        17
    );
-- Bob (id = 2)
INSERT INTO "todo" (title, description, done, userId)
VALUES ('Gym', 'Leg day workout', true, 18),
    ('Finish report', 'Due Monday', false, 18),
    (
        'Plan trip',
        'Look into flights for vacation',
        false,
        18
    );
-- Charlie (id = 19)
INSERT INTO "todo" (title, description, done, userId)
VALUES (
        'Pay bills',
        'Electricity and internet',
        true,
        19
    );
-- Diana (id = 4)
INSERT INTO "todo" (title, description, done, userId)
VALUES (
        'Clean room',
        'Tidy up bedroom and desk',
        false,
        20
    ),
    (
        'Buy books',
        'Get textbooks for new semester',
        false,
        20
    );
-- Eric (id = 5)
INSERT INTO "todo" (title, description, done, userId)
VALUES ('Update resume', 'Add recent job', true, 21);
SELECT *
from "User";
SELECT *
from todo;