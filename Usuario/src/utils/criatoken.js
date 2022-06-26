const jwt = require("jsonwebtoken");
const cfg = require("../config/cfg");

const cria_token = (id, apikey) => {
  return jwt.sign({ id: id, apikey: apikey }, cfg.jwt_secret, {
    expiresIn: cfg.jwt_expires,
  });
};

module.exports = cria_token;
