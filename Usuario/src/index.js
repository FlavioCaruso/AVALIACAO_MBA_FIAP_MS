// Importações - Express e Cors
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cfg = require("./config/cfg");
const rotaUsuario = require("./routes/usuario");
const cors = require("cors");

//Configurações
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

mongoose.connect(cfg.db_path, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/usuarios", rotaUsuario);

// Inicialização do Servidor
app.listen(3000, () =>
  console.log('Server Online - http://localhost:3000')
);