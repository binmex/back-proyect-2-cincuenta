const routes = require("express").Router();
const {
  save,
  update,
  findAll,
  findById,
  drop
} = require("../controllers/eventController");
//const check = require("../middleware/auth");

routes.get("/",findAll);
routes.get("/:id",findById);
routes.post("/", save);
routes.patch("/:id",update);
routes.delete("/:id",drop);

module.exports = routes;
