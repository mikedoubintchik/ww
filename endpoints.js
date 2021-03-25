const data = require("./data/products.json");

module.exports = function (app) {
  app.get("/health", (req, res) => {
    return res.status(200).send({
      status: true,
      version: "1",
    });
  });

  app.post("/product", (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint update a product'
    // #swagger.parameters['id'] = { description: 'productID' }

    /* #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Product" },
      description: 'Single product.'
    } */

    return res.status(200).send(data);
  });

  app.put("/product", (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint add a new product'
    // #swagger.parameters['id'] = { description: 'productID' }

    /* #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Product" },
      description: 'Single product.'
    } */

    return res.status(200).send(data);
  });

  app.delete("/product", (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint delete a product'
    // #swagger.parameters['id'] = { description: 'productID' }

    return res.status(200).send(data);
  });

  app.get("/products", (req, res) => {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint add a product'

    return res.status(200).send(data);
  });

  app.get("/products/:catID", (req, res) => {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint to get products by category ID'
    // #swagger.parameters['catID'] = { description: 'category ID' }

    const catID = Number(req.params.catID);

    const filterProductsByCatID = (products, catID) => {
      return products.filter((product) => product.category.id === catID);
    };

    if (typeof catID === "NaN") return res.status(404).send(false);

    /* #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Products" },
      description: 'All products.'
    } */
    return res.status(200).send(data);
  });
};
