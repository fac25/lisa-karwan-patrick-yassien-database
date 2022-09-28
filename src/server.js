// Imports
const express = require("express");
const { insertRestaurant, getAllRestaurants } = require("../model/restaurants.js");
const { home } = require("./templates.js");
const server = express();

// serve CSS and imgs to every route
const staticHandler = express.static("public");
server.use(staticHandler);


server.get("/", (req, res) => {
  res.send(home(req.body));
});

const bodyParser = express.urlencoded();


// Handles form submission
//pending, will come back to edit commented out bit
server.post("/", bodyParser, (request, response) => {
  const name = request.body.name;
  const description = request.body.description;
  const address = request.body.address;
  const price_range = request.body.price_range;

  let formValues = { name, description, address, price_range };

  let errors = {};
  if (!name) errors.name = "Please enter your name.";
  

  if (Object.keys(errors).length) {
    const body = home(getAllRestaurants(), errors, request.body)
    response.status(400).send(body); //html to be filled in
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
