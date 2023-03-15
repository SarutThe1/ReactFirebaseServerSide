const ggUser = require("../Models/GoogleUsers");
const User = require("../Models/NormUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createAndUpdateUser = async (req, res) => {
  const { name, email , picture} = req.user;

  const user = await ggUser.findOneAndUpdate({ email }, { name }, {picture}, { new: true });
  if (user) {
    res.json(user);
  } else {
    const newUser = await ggUser({
      email,
      name,
      picture
    }).save();
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await ggUser.findOne({ email: req.user.email }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Error");
  }
};

exports.register = async (req, res) => {
  try {
    //check user
    const { username, password, email, telephone, firstname, lastname } =
      req.body;
    var user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("This user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    user = new User({
      email,
      password,
      username,
      telephone,
      firstname,
      lastname,
    });
    //encrypt
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send("Register success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    var user = await User.findOneAndUpdate({ email }, { new: true });
    if (user) {
      //Check password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send("Password is not match");
      }

      // Payload
      const payload = {
        user: {
          _id: user._id,
          email: user.email,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          telephone: user.telephone,
          role: user.role,
        },
      };
      // Generate Token
      jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      return res.status(400).send("User not found!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};

exports.currentNormUser = async (req, res) => {
  try {
    const user = await  User.findOne({email: req.user.email})
    .select('-password').exec();
    res.send(user)
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
};
