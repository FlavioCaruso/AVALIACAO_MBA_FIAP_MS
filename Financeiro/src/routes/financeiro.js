const express = require("express");
const Financeiro = require("../model/financeiro");
const verifica_token = require("../middleware/verificatoken");
const route = express.Router();

route.get("/", verifica_token, (req, res) => {
  Financeiro.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao processar dados -> ${erro}` });
    res.status(200).send({ output: `ok`, payload: dados });
  });
});

route.post("/cadastro", verifica_token, (req, res) => {
  req.body.apikey = req.data.apikey;

  const dados = new Financeiro(req.body);

  dados
    .save()
    .then((result) => {
      return res.status(201).send({
        output: "Informações cadastradas com sucesso",
        payload: result,
      });
    })
    .catch((error) => {
      return res.status(500).send({ error });
    });
});

route.put("/:id", verifica_token, (req, res) => {
  Financeiro.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: false },
    (error, conta) => {
      if (error) res.status(500).send({ error });
      return res.status(202).send({ output: "Conta alterada com Sucesso" });
    }
  );
});

module.exports = route;
