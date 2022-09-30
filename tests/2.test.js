const test = require('node:test')
const assert = require('node:assert')
const { insertRestaurant } = require('../model/restaurants.js')

const itemWeAreInserting = {
  name: 'yassiens restaurant',
  description: 'a place that serves a lot of desserts',
  address: 'SPACE 4',
  price_range: 5,
};

test('add item to database', () => {
  const insertedRestaurant = insertRestaurant(itemWeAreInserting);
  const expectedRestaurant = itemWeAreInserting;
  assert.deepEqual(insertedRestaurant, expectedRestaurant)
})
