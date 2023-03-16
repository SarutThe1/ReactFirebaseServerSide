const ggUser = require("../Models/GoogleUsers");
const User = require("../Models/NormUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Normal register users
exports.listUser = async (req, res) => {
  try {
    const user = await User.find({}).select("-password").exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.readUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id }).select("-password").exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },req.body,

      /* { email : req.body.email },
      { name : req.body.name },
      { firstname: req.body.firstname },
      { lastname: req.body.lastname },
      { telephone: req.body.telephone },
      { picture : req.body.picture}, */

      {new:true}).exec()
    res.send(user)
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.removeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndDelete({ _id: id });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};
