const orderById = { order: [["id", "ASC"]] };
import { Jogador } from "../models/Jogador.js";

export const getAll = async (req, res) => {
  try {
    const copaMundo = await Jogador.findAll(orderById);
    res.render("index", { copaMundo, jogadorPut: null, jogadorDel: null });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const cadastro = (req, res) => {
  try {
    res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
export const create = async (req, res) => {
  try {
    const jogador = req.body;
    if (!jogador) {
      return res.redirect("/cadastro");
    }

    await Jogador.create(jogador);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getByID = async (req, res) => {
  try {
    const method = req.params.method;
    const copaMundo = await Jogador.findAll(orderById);
    const jogador = await Jogador.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        copaMundo,
        jogadorPut: jogador,
        jogadorDel: null,
      });
    } else {
      res.render("index", {
        copaMundo,
        jogadorPut: null,
        jogadorDel: jogador,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const jogador = req.body;
    await Jogador.update(jogador, { where: { id: req.params.id } });
    res.redirect("/");
  } catch {
    res.status(500).send({ err: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await Jogador.destroy({ where: { id: req.params.id } });

    res.redirect("/");
  } catch {
    res.status(500).send({ err: err.message });
  }
};
