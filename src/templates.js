const { getAllRestaurants } = require("../model/restaurants");

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
          <h1>Restaurants</h1>
          ${displayForm(error, values)}
          ${displayRestaurants()}
        </body>
      </html>
    `;
}

function displayForm(error, values) {
  return /*html*/ `
    <form method='POST'>
    ${displayError(error.name)}
      <label for='name'>Name</label>
      <input type='text' id='name' name='name' value="${handleValue(
        values.name
      )}"/>

      <label for='description'>Description</label>
      <input type='text' id='description' name='description' value="${handleValue(
        values.description
      )}"/>

      <label for='address'>Address</label>
      <input type='text' id='address' name='address' value="${handleValue(
        values.address
      )}"/>
     
      <label for='price_range'>Price Range</label>
      <input type='text' id='price_range' name='price_range' value="${handleValue(
        values.price_range
      )}"/>


      <button type='submit'>Submit</button>
    </form>
  `;
}

function displayRestaurants() {
  return /*html */ `<ul>
    ${getAllRestaurants()
      .map((res) => {
        return /*html */` 
            <li>
            <div>
                <h2>${res.name}</h2>
                <p>${res.price_range ? 'Price Range: ' + res.price_range: ''}</p>
                </div>
                <p>${res.address}</p>
                <p>${res.description}</p>
            </li>
        `;
      })
      .join("")}
    </ul>`;
}

function handleValue(value) {
  return value ? sanitize(value) : "";
}

function sanitize(str) {
  return str.replaceAll("<", "&lt");
}

function displayError(error) {
  return error ? `<span style="color: red">${error}</span>` : "";
}

module.exports = { home: displayHome };
