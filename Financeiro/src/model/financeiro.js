const mongoose = require("mongoose");

const schema_financeiro = new mongoose.Schema({
  nome_banco: { type: String },
  tipo_conta: { type: String },
  nome_titular: { type: String },
  limite_cartao: { type: Number },
  apikey: { type: String },
});

module.exports = mongoose.model("Financeiro", schema_financeiro);
