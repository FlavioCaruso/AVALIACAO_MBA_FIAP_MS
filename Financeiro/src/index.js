// Importações - Express e Cors
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cfg = require("./config/cfg");
const rotaFinanceiro = require("./routes/financeiro");
const cors = require("cors");

//Configurações
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

mongoose.connect(cfg.db_path, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/financeiro", rotaFinanceiro);

// Inicialização do Servidor
app.listen(3001, () =>
  console.log("Server Online Financeiro - http://localhost:3001")
);
