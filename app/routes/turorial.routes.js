module.exports = app => {

  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Customer
  router.post("/", tutorials.create); 

  // Retrieve all Customers
  router.get("/customers", tutorials.findAll);

  // Retrieve a single Customer with id
  router.get("/customers/:id", tutorials.findOne);

  // Update a Customer with id
  router.put("/:id", tutorials.update);

  // Delete a Customer with id
  router.delete("/:id", tutorials.delete);


  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);

  app.use("/", router);
};
