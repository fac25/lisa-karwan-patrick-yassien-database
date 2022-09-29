const { getAllRestaurants } = require("../model/restaurants");

function home(restaurantArr, error = {}, values = {}) {
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
        <div class="center width-sm">
          <h1>Restaurants</h1>
          ${form(error, values)}
        </div>
          ${displayRestaurants()}
          </body>
      </html>
    `;
}

function form(error, values) {
  return /*html*/ `
    <form method='POST'>
    ${validation(error.name)}
      <label for='name'>Name:</label>
      <input type='text' id='name' name='name' value="${handleValue(
        values.name
      )}"/><br><br>

      <label for='description'>Description:</label>
      <input type='text' id='description' name='description' value="${handleValue(
        values.description
      )}"/><br><br>

      <label for='address'>Address:</label>
      <input type='text' id='address' name='address' value="${handleValue(
        values.address
      )}"/><br><br>
     
      <label for='price_range'>Price Range:</label>
      <input type='text' id='price_range' name='price_range' value="${handleValue(
        values.price_range
      )}"/><br><br>


      <button type='submit'>Submit</button>
    </form>
  `;
}

const displayRestaurants = () => {
  return /*html */ `<ul class="center">
    <div class="grid">
    ${getAllRestaurants()
      .map((res) => {
        return /*html */ ` 
            <li>
            <div>
                <h2>${res.name}</h2>
                <p>Price range: ${res.price_range}</p>
                </div>
                <p>${res.address}</p>
                <p>${res.description}</p>
            </li>
        `;
      })
      .join("")}
      </div>
    </ul>
  `;
};

function handleValue(value) {
  return value ? sanitize(value) : "";
}

function sanitize(str) {
  return str.replaceAll("<", "&lt");
}

function validation(message) {
  return message ? `<span style="color: red">${message}</span>` : "";
}

module.exports = { home };
