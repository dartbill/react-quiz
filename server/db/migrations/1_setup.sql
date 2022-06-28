DROP TABLE IF EXISTS scoreBoard;

CREATE TABLE scoreBoard (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  score int NOT NULL
);
