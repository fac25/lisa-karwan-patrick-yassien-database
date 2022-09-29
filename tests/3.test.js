const test = require('node:test')
const assert = require('node:assert')
const { getAllRestaurants } = require('../model/restaurants.js')

test('get all restaurantes', () => {
  const restaurants = getAllRestaurants()
  const expectedLength = 3
  const firstRestaurant = {
    name: 'E-Mono Kebabs',
    description:
      'Legendary kebabs and wraps. Nice lunch deal: £5 for any wrap and a drink',
    address: '13 Stroud Green Rd',
    price_range: 5,
  }
  const lastRestaurant = {
    name: 'Junction',
    description:
      'Cool mini food market of pop-up stalls, including Japanese, Malaysian, Thai, Nepalese and vegan food.',
    address: '95, Seven Sisters Road',
    price_range: 10,
  }

  assert.equal(restaurants.length, expectedLength)
  assert.equal(restaurants[0], firstRestaurant)
  assert.equal(restaurants[restaurants.length - 1], lastRestaurant)
})
