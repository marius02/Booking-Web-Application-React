const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/dev");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.sendApiError({
      title: "Missing Data",
      detail: "Email or password is missing",
      status: 422,
    });
  }
  User.findOne({ email }, (error, foundUser) => {
    if (error) {
      return res.mongoError(error);
    }
    if (!foundUser) {
      return res.sendApiError({
        title: "Invalid Email",
        detail: "User with provided email dosen't exist!",
        status: 422,
      });
    }

    if (foundUser.hasSamePasword(password)) {
      const token = jwt.sign(
        {
          sub: foundUser.id,
          username: foundUser.username,
        },
        config.JWT_SECRET,
        { expiresIn: "2h" }
      );
      return res.json({ token });
    } else {
      return res.sendApiError({
        title: "Invalid Password",
        detail: "User with provided password is wrong!",
        status: 422,
      });
    }
  });
};

exports.register = (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;

  if (!password || !email) {
    return res.sendApiError({
      title: "Missing Data",
      detail: "Email or password is missing",
      status: 422,
    });
  }

  if (password !== passwordConfirmation) {
    return res.sendApiError({
      title: "Invalid Passowrd",
      detail: "Pasword is not matching the confirmation password",
      status: 422,
    });
  }

  User.findOne({ email }, (error, existingUser) => {
    if (error) {
      return res.mongoError(error);
    }
    if (existingUser) {
      return res.sendApiError({
        title: "Invalid Email",
        detail: "User with provided email already exists",
        status: 422,
      });
    }

    const user = new User({ username, email, password });
    user.save((error) => {
      if (error) {
        return res.mongoError(error);
      }
      return res.json({ message: "Registered" });
    });
  });
};

exports.onlyAuthUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decodedToken = parseToken(token);
    if (!decodedToken) {
      return notAuthorized(res);
    }

    User.findById(decodedToken.sub, (error, foundUser) => {
      if (error) {
        return res.mongoError(error);
      }
      if (foundUser) {
        res.locals.user = foundUser;
        next();
      } else {
        return notAuthorized(res);
      }
    });
  } else {
    return notAuthorized(res);
  }
};

function parseToken(token) {
  try {
    return jwt.verify(token.split(" ")[1], config.JWT_SECRET) || null;
  } catch (error) {
    return null;
  }
}

function notAuthorized(res) {
  return res.status(401).send({
    errors: [
      {
        title: "Not Authorized!",
        detail: "You need to log in to see this",
      },
    ],
  });
}
