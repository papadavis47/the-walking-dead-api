const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: "Something went wrong, warning from middleware here!" });
};

module.exports = errorHandlerMiddleware;
