// import { Sequelize } from "sequelize";
import {Jogador} from "../models/Jogador.js";

export const getAll = async (req, res) => {
  try {
    const copaMundo = await Jogador.findAll();
    res.render("index", { copaMundo,jogador: undefined });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
