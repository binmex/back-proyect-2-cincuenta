const routes = require("express").Router();
const {
  save,
  update,
  findAll,
  findId,
  findById,
  deleteDiscipline,
} = require("../controllers/disciplineController");
//const check = require("../middleware/auth");

routes.get("/",findAll);
routes.get("/:id",findId);
routes.get("/byId/:id",findById);
routes.post("/", save);
routes.patch("/:id",update);
routes.delete("/:id",deleteDiscipline);

module.exports = routes;
