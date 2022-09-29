const test = require('node:test')
const assert = require('node:assert')
const { insertRestaurant } = require('../model/restaurants.js')

test('add item to database', () => {
  const insertedRestaurant = insertRestaurant({
    name: 'yassiens restaurant',
    description: 'a place that serves a lot of desserts',
    address: 'SPACE 4',
    price_range: 5,
  })
  const expectedRestaurant = {
    name: 'yassiens restaurant',
    description: 'a place that serves a lot of desserts',
    address: 'SPACE 4',
    price_range: 5,
  }
  assert.deepEqual(insertedRestaurant, expectedRestaurant)
})
