const orderById = { order: [["id", "ASC"]] };
import { Jogador } from "../models/Jogador.js";
import { Op } from "sequelize";
let message = "";

export const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 1000);

    const copaMundo = await Jogador.findAll(orderById);
    res.render("index", {
      copaMundo,
      jogadorPut: null,
      jogadorDel: null,
      message,
      jogadorSearch: [],
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const cadastro = (req, res) => {
  try {
    res.render("cadastro", { message });
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
    message = "Jogador criado com sucesso!";

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
        message,
        jogadorSearch: [],
      });
    } else {
      res.render("index", {
        copaMundo,
        jogadorPut: null,
        jogadorDel: jogador,
        jogadorSearch: [],
        message
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

    message = "Jogador atualizado com sucesso!";

    res.redirect("/");
  } catch {
    res.status(500).send({ err: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await Jogador.destroy({ where: { id: req.params.id } });

     message = "Jogador removido com sucesso!";

    res.redirect("/");
  } catch {
    res.status(500).send({ err: err.message });
  }
};

export const detalhes = async (req, res) => {
  try {
    const jogador = await Jogador.findByPk(req.params.id);
    res.render("detalhes", { jogador });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const searchByName = async (req, res) => {
  try {
    const jogador = await Jogador.findAll({
      where: { nome: { [Op.like]: `%${req.body.jogador}%` } },
      order: [["id", "ASC"]],
    });

    if (jogador.length == 0) {
      message = "Jogador não encontrado.";
      return res.redirect("/");
    }

    res.render("index", {
      copaMundo: [],
      jogadorPut: null,
      jogadorDel: null,
      message,
      jogadorSearch: jogador,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
