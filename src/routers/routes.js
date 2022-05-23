const { Router } = require("express");
const ClientController = require("../controllers/ClientsController.js");

const routes = new Router();

routes.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

routes.get("/users", ClientController.getAllClients);

routes.get("/users/:id", ClientController.getOneClient);


module.exports = routes;
