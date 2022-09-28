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
          </body>
      </html>
    `
}

function form(error, values) {
  return /*html*/ `
    <form method='POST'>
      <label for='name'>Name</label>
      ${validation(error.name)}
      <input type='text' id='name' name='address'
      value="${values.name ? sanitize(values.name) : ''}"
      />

      <label for='description'>Description</label>
      <input type='text' id='description' name='description'/>

      <label for='address'>Address</label>
      <input type='text' id='address' name='address'/>
     
      <label for='price_range'>Price Range</label>
      <input type='text' id='price_range' name='price_range'/>

      <button type='submit'>Submit</button>
    </form>
  `
}

function sanitize(str) {
  return str.replaceAll('<', '&lt')
}

function validation(message) {
  return message ? `<span style="color: red">${message}</span>` : ''
}

module.exports = { home }