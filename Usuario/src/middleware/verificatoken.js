const jwt = require("jsonwebtoken");
const cfg = require("../config/cfg");

const verifica_token = (req,res,next)=>{

    const token = req.headers.token;
    if(!token)return res.status(401).send({output:`Não autorizado`});

    jwt.verify(token,cfg.jwt_secret,(erro,result)=>{
        if(erro)return res.status(401).send({output:`Token inválido -> ${erro}`})
        req.data = {
            _id:result._id,
            apikey: result.apikey,
        }
        next();
    })

}

module.exports = verifica_token;