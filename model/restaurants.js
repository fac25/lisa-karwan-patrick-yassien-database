const db = require("../database/db.js");


const insert_restaurant = db.prepare(/*sql*/ `
  INSERT INTO restaurants (name, description, address, price_range)
  VALUES(
    $name,
    $description,
    $address,
    $price_range
  )
  RETURNING id
`);

function insertRestaurant(restaurant) {
  return insert_restaurant.get(restaurant);
}

module.exports = { insertRestaurant }