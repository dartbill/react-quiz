TRUNCATE TABLE users RESTART IDENTITY;

INSERT INTO users (name, score)
VALUES
    ('june', 10),
    ('bug', 20);
