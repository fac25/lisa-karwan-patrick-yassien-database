const { getAllRestaurants } = require("../model/restaurants");

function home() {
  return /*html*/ `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Restaurants</title>
        </head>
        <body>
          <h1>Restaurants</h1>
          ${form()}
          ${displayRestaurants()}
          </body>
      </html>
    `;
}

function form() {
  return /*html*/ `
    <form method='POST'>
      <label for='name'>Name</label>
      <input type='text' id='name' name='address'/>

      <label for='description'>Description</label>
      <input type='text' id='description' name='description'/>

      <label for='address'>Address</label>
      <input type='text' id='address' name='address'/>
     
      <label for='price_range'>Price Range</label>
      <input type='text' id='price_range' name='price_range'/>

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

module.exports = { home };
