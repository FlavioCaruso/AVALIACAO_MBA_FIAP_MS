const express = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const cria_token = require("../utils/criatoken");
const cfg = require("../config/cfg");
const verifica_token = require("../middleware/verificatoken");
const { v4: uuidv4 } = require("uuid");
const route = express.Router();

route.get("/", verifica_token, (req, res) => {
  Usuario.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao processar dados -> ${erro}` });
    res.status(200).send({ output: `ok`, payload: dados });
  });
});

// Cadastro de novo usuário
route.post("/cadastro", (req, res) => {
  bcrypt.hash(req.body.senha, cfg.salt, (erro, result) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao gerar a senha -> ${erro}` });

    req.body.senha = result;
    req.body.apikey = uuidv4();

    const dados = new Usuario(req.body);
    dados
      .save()
      .then((result) => {
        res
          .status(201)
          .send({ output: `Cadastro realizado com sucesso`, payload: result });
      })
      .catch((erro) =>
        res.status(500).send({ output: `Erro ao fazer o cadastro -> ${erro}` })
      );
  });
});

//  Verifica usuário, gera o token
route.post("/login", (req, res) => {
  Usuario.findOne({ nomeusuario: req.body.nomeusuario }, (erro, usuario) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao tentar localizar -> ${erro}` });
    if (!usuario)
      return res.status(400).send({ output: `Usuário não localizado` });

    const gerar_token = cria_token(usuario.id, usuario.apikey);
    bcrypt.compare(req.body.senha, usuario.senha, (erro, same) => {
      if (erro)
        return res
          .status(500)
          .send({ output: `Erro ao validar a senha ->${erro}` });
      if (!same) return res.status(400).send({ output: `Senha inválida` });
      if (!erro) {
        res.status(200).send({ token: gerar_token, payload: usuario });
      }
    });
  });
});

route.post("/altera-senha", verifica_token, (req, res) => {
  Usuario.findOne({ _id: req.body._id }, (erro, usuario) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao tentar localizar -> ${erro}` });
    if (!usuario) res.status(400).send({ error: `Usuário não localizado` });
    bcrypt.compare(req.body.senha, usuario.senha, (erro, same) => {
      if (erro)
        return res.status(500).send({ output: `Erro ao validar a senha` });
      if (!same) return res.status(400).send({ output: `Senha inválida` });
      bcrypt.hash(req.body.novaSenha, cfg.salt, (erro, result) => {
        Usuario.findByIdAndUpdate(
          usuario._id,
          { senha: result },
          { new: false },
          (erro, usuario) => {
            if (erro) res.status(500).send({ erro });
            res
              .status(200)
              .send({ success: true, output: `Atualizado com sucesso` });
          }
        );
      });
    });
  });
});

module.exports = route;
