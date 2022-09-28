const { getAllRestaurants } = require("../model/restaurants");

function home(restaurantArr, error = {}, values = {}) {
    return /*html*/ `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Restaurants</title>
        </head>
        <body>
          <h1>Restaurants</h1>
          ${form(error, values)}
          ${displayRestaurants()}
          </body>
      </html>
    `;
}
        
 
function form(error, values) {
  return /*html*/ `
    <form method='POST'>
    ${validation(error.name)}
      <label for='name'>Name</label>
      <input type='text' id='name' name='name' value="${handleValue(values.name)}"/>

      <label for='description'>Description</label>
      <input type='text' id='description' name='description' value="${handleValue(values.description)}"/>

      <label for='address'>Address</label>
      <input type='text' id='address' name='address' value="${handleValue(values.address)}"/>
     
      <label for='price_range'>Price Range</label>
      <input type='text' id='price_range' name='price_range' value="${handleValue(values.price_range)}"/>


      <button type='submit'>Submit</button>
    </form>
  `;
}


const displayRestaurants = () => {
  return /*html */ `<ul>
    ${getAllRestaurants()
      .map((res) => {
        return /*html */ ` 
            <li>
            <div>
                <h3>${res.name}</h3>
                <p>Price range${res.price_range}</p>
                </div>
                <p>${res.address}</p>
                <p>${res.description}</p>
            </li>
        `;
      })
      .join("")}
    </ul>`;
};

function handleValue(value) {
  return value ? sanitize(value) : ''
}

function sanitize(str) {
  return str.replaceAll('<', '&lt')
}

function validation(message) {
  return message ? `<span style="color: red">${message}</span>` : ''
}

module.exports = { home };
