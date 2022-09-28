const test = require("node:test");
const assert = require("node:assert");
const { insertRestaurant } = require("../model/restaurants.js");

test("add item to database", () => {
  const restaurants = insertRestaurant({name: 'yassiens restaurant', description:'a place that serves a lot of desserts', address:'SPACE 4', price_range: 5});
  const expected = 
    {
      name: "yassiens restaurant",
      description: "a place that serves a lot of desserts",
      address: "SPACE 4",
      price_range: 5,
    };
  assert.deepEqual(restaurants, expected);
});

