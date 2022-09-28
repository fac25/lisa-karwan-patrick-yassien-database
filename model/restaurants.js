const db = require("../database/db");

const get_all_restaurants = db.prepare(/*sql*/`
  SELECT * FROM restaurants
`)

function getAllRestaurants(){
  return get_all_restaurants.all()
}

// console.log(getAllRestaurants())

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

module.exports = { insertRestaurant, getAllRestaurants }