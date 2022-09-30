# Week 2: Database Project

### 🍕 Finsbo! 😋

### By: Karwan, Lisa, Patrick and Yassien

Our website allows the user to read the recommended restaurants of others and submit their own restaurant recommendation.

You can find our site hosted on [Heroku](https://fac25-restaurants.herokuapp.com/)

## ⚠️ Known Issues ⚠️

- [ ] Make the website accessible [#12](https://github.com/fac25/lisa-karwan-patrick-yassien-database/issues/12)
- [ ] Ensure responsiveness on the website [#10](https://github.com/fac25/lisa-karwan-patrick-yassien-database/issues/10)
- [ ] WRITE STYLING! Improve the website design [#11](https://github.com/fac25/lisa-karwan-patrick-yassien-database/issues/11)

## Our Database

Our site uses a database with the following schema:

<details>
<summary><code>restaurants</code></summary>

| column      | type    | constraints               |
| ----------- | ------- | ------------------------- |
| id          | integer | primary key autoincrement |
| name        | text    | not null                  |
| description | integer |                           |
| address     | text    |                           |
| price_range | integer |                           |

</details>

<details>
<summary><code>reviews</code></summary>

| column         | type    | constraints                |
| -------------- | ------- | -------------------------- |
| id             | integer | primary key autoincrement  |
| name           | text    | not null                   |
| review         | text    |                            |
| rating         | integer |                            |
| restaurants_id |         | references restaurants(id) |

  </details>

```sql
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
```

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run seed` to seed the local database
4. Run `npm run dev` to start the server

This uses the `nodemon` library to auto-restart the server when you save changes.

## Test

Our test folder contains three tests.

- [x] Test 1 Tests the home get and post route as well as one for missing routes.
- [x] Test 2 Tests for the ability to add an entry to the restaurants table in the database.
- [x] Test 3 Tests for the ability to retrieve all entries from the restaurants table in the database.

To run:

`npm run test:1`

`npm run test:2`

`npm run test:3`

## Users Stories

- [x] As a user, I want to: submit information to your site for anyone to see

- [x] As a user, I want to: come back to your site later and see what I posted is still there

## Stretch

- [ ] As a picky user, I want to: view filtered/sorted data (eg only restaurants within a particular price range), instead of just all of it
- [ ] GitHub Actions CI setup to run your tests when you push

## Acceptance Criteria

- [x] A form for users to submit data
- [x] A page showing all the data
- [x] Semantic form elements with correctly associated labels
- [x] A SQLite database
- [x] A schema describing your database in your README
- [x] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

## Known Issues

- [ ] Make the website accessible [#12](https://github.com/fac25/lisa-karwan-patrick-yassien-database/issues/12)
- [ ] Ensure responsiveness on the website [#10](https://github.com/fac25/lisa-karwan-patrick-yassien-database/issues/10)
