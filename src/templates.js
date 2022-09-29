const { getAllRestaurants } = require('../model/restaurants')

function displayHome(error = {}, values = {}) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
          <title>Restaurants</title>
        </head>
        <body>
          <header>
            <h1>Finsbo!</h1>
          </header>
          <main>
            ${displayError(error.name)}
            ${displayForm(values)}
            <h2>Finsbury Park Restaurants</h2>
            ${displayRestaurants()}
          </main>
        </body>
      </html>
    `
}

function displayForm(values) {
  return /*html*/ `
    <form method='POST'>
      <label for='name'>Name</label>
      <input type='text' id='name' name='name' aria-describedBy='name-error' value="${handleValue(
        values.name
      )}">

      <label for='description'>Description</label>
      <input type='text' id='description' name='description' value="${handleValue(
        values.description
      )}">

      <label for='address'>Address</label>
      <input type='text' id='address' name='address' value="${handleValue(
        values.address
      )}">
     
      <label for='price_range'>Price Range</label>
      <input type='text' id='price_range' name='price_range' value="${handleValue(
        values.price_range
      )}">


      <button type='submit'>Add Restaurant</button>
    </form>
  `
}

function displayRestaurants() {
  return /*html */ `<ul>
    ${getAllRestaurants()
      .map((res) => {
        return /*html */ ` 
            <li>
            <div>
                <h3>${res.name}</h2>
                <p>${
                  res.price_range ? 'Price Range: ' + res.price_range : ''
                }</p>
                </div>
                <p>${res.address}</p>
                <p>${res.description}</p>
            </li>
        `
      })
      .join('')}
    </ul>`
}

function handleValue(value) {
  return value ? sanitize(value) : ''
}

function sanitize(str) {
  return str.replaceAll('<', '&lt')
}

function displayError(error) {
  return error ? `<span id='name-error' style="color: red">${error}</span>` : ''
}

module.exports = { home: displayHome }
