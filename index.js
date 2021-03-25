/**
 *
 * @name ww
 */

"use strict";

// Load modules
const http = require("http");
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");

const swaggerFile = require("./swagger_output.json");

const products = require("./data/products.json");

const { ENV, PORT } = process.env;

// Create our server
http.createServer(app).listen(PORT || 80);

// Basic HTTP response
app.get("/", (req, res) => {
  return res.redirect("/health");
});

app.get("/health", (req, res) => {
  return res
    .status(200)
    .json({ status: true, version: process.env.npm_package_version });
});

app.get("/products", (req, res) => {
  return res.status(200).send(products);
});

app.get("/products/:catID", (req, res) => {
  const catID = Number(req.params.catID);

  const filterProductsByCatID = (products, catID) => {
    return products.filter((product) => product.category.id === catID);
  };

  if (typeof catID === "NaN") {
    throw new Error("Category ID must be a number");
    res.status(400);
  }

  const filteredProducts = filterProductsByCatID(products, catID);

  return res.status(200).send({
    products: filteredProducts.length,
    data: filteredProducts,
  });
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./endpoints")(app);
