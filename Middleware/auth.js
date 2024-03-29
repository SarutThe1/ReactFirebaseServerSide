const jwt = require("jsonwebtoken");
const User = require("../Models/NormUser");
const admin = require("../config/firebase");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send('No token, authorization denied')
      /* const firebaseUser = await admin
        .auth()
        .verifyIdToken(req.headers.authtoken);

      req.user = firebaseUser; 

      next(); */
    }
    const decoded = jwt.verify(token, "jwtSecret");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send("Token Invalid");
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const { email } = req.user;
    const adminUser = await User.findOne({ email }).exec();
    if (adminUser.role !== "admin") {
      res.status(403).send(err, "Admin Access Denied");
    } else {
      next();
    }
  } catch (err) {
    res.status(401).send("Admin Access Denied");
  }
};
