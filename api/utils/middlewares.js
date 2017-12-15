const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {

  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // Encrypt the PW first and set the user object on `req.user` 
  // then call `next` and handle saving that user in the `userController`
  
  const { username, password } = req.body;
  
  /* GENERATING A SALT AND HASH ON SEPARATE FUNCTION CALLS ---- LS-AUTH-JWT EXAMPLE */
  // bcrypt.genSalt(SaltRounds, (err, salt) => {
    //   if (err) {
      //     return next(err);
      //   }
      //   bcrypt.hash(password, salt, (err, hash) => {
        //     if (err) {
          //       return next(err);
          //     }
          //     password = hash;
          //     next();
          //   });
          // });
  /* AUTO GENERATING SALT AND HASH ---- AUTH */
  if (!password) {
    res.json({ error: `Need a password, ${res}` });
    return;
  }
  bycrypt
    .hash(password, SaltRounds)
    .then((pw) => {
      req.password = pw;
      next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password comparing, bcrypt.compare()
  // You'll need to find the user in your DB
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  // If the passwords match set the username on `req` ==> req.username = user.username; and call next();

  bcrypt
    .compare(password, User.password, (err, response) => {
      if (err) {
        return cb(err);
      }
      req.username = username;
      cb(null, response);
    });
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
