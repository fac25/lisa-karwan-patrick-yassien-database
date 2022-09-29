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
            <div id="formContainer" class="center">
            ${displayError(error.name)}
            ${displayForm(values)}
            </div>
            <h2 class="center width-sm">Finsbury Park Restaurants</h2>
            ${displayRestaurants()}
          </main>
        </body>
      </html>
    `
}

function displayForm(values) {
  return /*html*/ `
    <form method='POST' class="form-style row">
    <div>
      <label for='name' class="one-third">Name</label>
      <input class="two-thirds" type='text' id='name' name='name' aria-describedBy='name-error' value="${handleValue(
        values.name
      )}">
    </div>  
    <div>
      <label for='description' class="one-third">Description:</label>
      <textarea class="two-thirds" type='text' id='description' name='description' value="${handleValue(
        values.description
      )}"></textarea>
    </div>
    <div>   
      <label for='address' class="one-third">Address:</label>
      <input class="two-thirds" type='text' id='address' name='address' value="${handleValue(
        values.address
      )}"/>
    </div> 
    <div>    
      <label for='price_range' class="one-third">Price Range:</label>
      <input class="two-thirds" type='text' id='price_range' name='price_range' value="${handleValue(
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
                <p>${
                  res.price_range ? '£' + res.price_range : ''
                }</p>
                </div>
                <p>${res.address}</p>
                <p>${res.description}</p>
            </li>
        `
      })
      .join("")}
      </div>
    </ul>
  `;
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
