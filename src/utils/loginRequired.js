const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {
    // console.log(req.headers)
    // const { jwtoken } = req.headers.authorization;
    const jwtoken = req.headers.authorization;

    // await jwt.verify(
    //   jwtoken,
    //   process.env.SECRETE_KEY,
    //   (err, decoded_payload) => {
    //     if (decoded_payload != undefined) {
    //       req.decodedJwtPayload = decoded_payload;
    //     }
    //   }
    // );

    if (jwtoken != undefined) {
      const decoded = await jwt.verify(jwtoken, process.env.SECRETE_KEY);
      req.decodedJwtPayload = decoded;
    }
  } catch (err) {
    res.status(err.StatusCode || 400).json({ message: err.message });
  }
  next();
};

module.exports = { verifyUser };
