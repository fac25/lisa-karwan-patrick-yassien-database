const { getAllRestaurants } = require('../model/restaurants')

function displayHome(error = {}, values = {}) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
          <title>Restaurants</title>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <header class="center width-sm">
            <h1>Finsbo!</h1>
          </header>
          <main>
            <div id="formContainer" class="center column width-xl">
            ${displayError(error.name)}
            ${displayForm(values)}
            </div>
            <h2 class="width-xl center">Finsbury Park Restaurants</h2>
            ${displayRestaurants()}
          </main>
        </body>
      </html>
    `
}

function displayForm(values) {
  return /*html*/ `
    <form method='POST' class="form-style">
    <div class='form-item'>
      <label for='name'>Restaurant Name</label>
      <input type='text' id='name' name='name' aria-describedBy='name-error' value="${handleValue(
        values.name
      )}">
    </div>  
    <div celass='form-item'>
      <label for='description'>Description:</label>
      <textarea type='text' id='description' name='description' value="${handleValue(
        values.description
      )}"></textarea>
    </div>
    <div class='form-item'>   
      <label for='address'>Restaurant Address:</label>
      <input type='text' id='address' name='address' value="${handleValue(
        values.address
      )}"/>
    </div> 
    <div class='form-item'>    
      <label for='price_range'>Price Range:</label>
      <input type='number' id='price_range' name='price_range' value="${handleValue(
        values.price_range
      )}"/>
    </div>   
      <button type='submit'>Add Restaurant</button>
    </form>
  `
}

function displayRestaurants() {
  return /*html */ `<ul class="center width-xl">
    <div class="grid">
    ${getAllRestaurants()
      .map((res) => {
        return /*html */ ` 
            <li>
            <div>
                <h3>${res.name}</h2>
                </div>
                <p>${res.address}</p>
                <p>${res.description}</p>
                <p>${res.price_range ? '£' + res.price_range : ''}</p>
            </li>
        `
      })
      .join('')}
      </div>
    </ul>
  `
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
