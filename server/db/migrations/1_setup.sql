DROP TABLE IF EXISTS scoreboard;

CREATE TABLE scoreboard (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  score int NOT NULL
);
