const routes = require("express").Router();
const {
  save,
  update,
  findAll,
  findId,
  findById,
  deleteClient,
} = require("../controllers/affileateController");
//const check = require("../middleware/auth");

routes.get("/",findAll);
routes.get("/:id",findId);
routes.get("/byId/:id",findById);
routes.post("/", save);
routes.patch("/:id",update);
routes.delete("/:id",deleteClient);

module.exports = routes;
