// Imports
const express = require("express");
const { insertRestaurant } = require("../model/restaurants.js");
const { home } = require("./templates.js");
const server = express();

// serve CSS and imgs to every route
const staticHandler = express.static("public");
server.use(staticHandler);


server.get("/", (req, res) => {
  res.send(home(req.body));
});

const bodyParser = express.urlencoded();

const restaurantQueries = [{id: 1, name:'E-Mono Kebabs', description:'Legendary kebabs and wraps. Nice lunch deal: £5 for any wrap and a drink', address:'13 Stroud Green Rd', price_range: 5}];

// Handles form submission
//pending, will come back to edit commented out bit
server.post("/", bodyParser, (request, response) => {
  const name = request.body.name;
  const description = request.body.description;
  const address = request.body.address;
  const price_range = request.body.price_range;

  let formValues = { name, description, address, price_range };

  let errors = {};
  console.log(request.body)
  if (!name) errors.name = "Please enter your name.";
  

  if (Object.keys(errors).length) {
    response.status(400).send(home(restaurantQueries, errors, request.body)); //html to be filled in
  } else {
    response.redirect("/");
    insertRestaurant(formValues);
  }
});

// Missing Routes
server.use((request, response) => {
  response.status(404).send(`<h1>Not found</h1>`);
});

module.exports = server;
