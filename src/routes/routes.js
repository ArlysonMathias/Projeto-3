import express from "express";
export const routes = express.Router();

import {
  getAll,
  cadastro,
  create,
  getByID,
  update,
  remove,
} from "../controllers/JogadorController.js";

// const JogadorController = require("../controllers/JogadorController");
routes.get("/", getAll);
//rota cadastro
routes.get("/cadastro", cadastro);
//rota que gera o create
routes.post("/create", create);
routes.get("/getById/:id/:method", getByID);
routes.post("/update/:id", update);
routes.get("/remove/:id", remove);
