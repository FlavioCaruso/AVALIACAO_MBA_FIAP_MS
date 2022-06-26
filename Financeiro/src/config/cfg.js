const cfg = () => {
  return {
    jwt_secret: "#V$Code%",
    jwt_expires: "2d",
    salt: 10,
    db_path:
      "mongodb+srv://*****:*****@*****.*****.mongodb.net/*****?retryWrites=true&w=majority",
  };
};
module.exports = cfg();
