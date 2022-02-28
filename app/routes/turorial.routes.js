module.exports = app => {

  const tasks = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Customer
  router.post("/", tasks.create); 

  // Retrieve all Customers
  router.get("/tasks", tasks.findAll);

  // Retrieve a single Customer with id
  router.get("/tasks/:id", tasks.findOne);

  // Update a Customer with id
  router.put("/:id", tasks.update);

  // Delete a Customer with id
  router.delete("/:id", tasks.delete);


  router.delete("/", tasks.deleteAll);

  app.use("/api/tutorials", router);

  app.use("/", router);
};
