const jwt = require("jsonwebtoken");
const secret = process.env.SECKRET_KEY;

const authenticate = (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    token = req.headers.authorization;
  }

  if (!token) {
    res.status(401).json("Not authenticated");
  } else {
    let newToken = token.replace("Bearer ", "");
    jwt.verify(newToken, secret, (err, decoded) => {
      if (err) res.json({ msg: err });
      console.log(`decoded`, decoded);

      const { email, id } = decoded;
      res.user = { email, id };
      next();
    });
  }
};

module.exports = { authenticate };
