DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  score int NOT NULL
);
