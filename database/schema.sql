BEGIN;

CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  address TEXT,
  price_range INTEGER
);

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  review TEXT,
  rating INTEGER,
  restaurants_id REFERENCES restaurants(id)
);


COMMIT;