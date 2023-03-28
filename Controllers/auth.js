
const User = require("../Models/NormUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createAndUpdateUser = async (req, res) => {
  const { email , name, picture, telephone, firstname, lastname} = req.user;

  const user = await User.findOneAndUpdate({ email }, {picture}, { new: true });
  if (user) {
    /* console.log('USER UPDATED: ', user) */
    res.json(user);
  } else {
    const newUser = await User({
      email,
      name,
      picture,
      telephone,
      firstname,
      lastname,
    }).save();
    /* console.log('USER CREATED: ', newUser) */
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Error");
  }
};

exports.register = async (req, res) => {
  try {
    //check user
    const { name, password, email, telephone, firstname, lastname } =
      req.body;
    var user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("This user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    user = new User({
      email,
      password,
      name,
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
          name: user.name,
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
