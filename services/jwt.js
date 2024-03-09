//importar dependencias
const jwt = require("jwt-simple");
const moment = require("moment");

//clave secreta
const secret = "CLAVE_SECRETA_PELUQUERIA_78826913";

//crear funcion para generar token
const createToken = (user) => {
  const payload = {
    name: user.username,
    password: user.password,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix(),
  };
  //devolver token codificado
  return jwt.encode(payload, secret);
};

module.exports = {
  secret,
  createToken,
};
