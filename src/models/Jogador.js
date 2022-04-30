import Sequelize from "sequelize";
import { connection } from "../database/db.js"


export const Jogador = connection.define(
  "jogador",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    posicao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pais: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    clube: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ger: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

