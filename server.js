const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

var routes = require("./app/routing/htmlRoutes.js");
// var moreRoutes = require("./app/routing/apiRoutes.js");

app.use(routes);
// app.use(moreRoutes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });