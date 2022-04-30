import dotenv from 'dotenv';
import express from "express";
import path from "path";
import {routes} from "./src/routes/routes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve(path.dirname(""));

app.set("view engine", "ejs"); //setando a engine do ejs
app.use(express.static(path.join(__dirname, "public"))); //fazendo o servidor enxergar a pasta public
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
