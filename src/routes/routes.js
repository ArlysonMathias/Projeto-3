import express from "express";
export const routes = express.Router();
// const JogadorController = require("../controllers/JogadorController");
import {getAll} from "../controllers/JogadorController.js";


routes.get("/", getAll);

// module.exports = routes; mesma função linha 2
