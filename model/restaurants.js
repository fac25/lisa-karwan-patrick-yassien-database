const db = require("../database/db");

const get_all_restaurants = db.prepare(/*sql*/`
  SELECT name, description, address, price_range FROM restaurants
`)

function getAllRestaurants(){
  return get_all_restaurants.all()
}

const insert_restaurant = db.prepare(/*sql*/ `
  INSERT INTO restaurants (name, description, address, price_range)
  VALUES(
    $name,
    $description,
    $address,
    $price_range
  )
  RETURNING name, description, address, price_range
`);

function insertRestaurant(restaurant) {
  return insert_restaurant.get(restaurant);
}

module.exports = { insertRestaurant, getAllRestaurants }