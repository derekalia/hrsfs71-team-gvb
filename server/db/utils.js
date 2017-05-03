const User = require('./schemas/users.js');

// Returns null is user already exists.
// Returns newUser, if user is successfully added to database.
module.exports.addUser = (username, password, cb) => {
  User.find({name: username}, (err, user) => {
    if (err) {
      throw err;
    } else if (user.length) {
      cb(null);
    } else {
      User.create({name: username, password: password}, (err, newUser) => {
        if (err) {
          throw err;
        } else {
          console.log('user successfully added:', newUser);
          cb(newUser);
        }
      });
    }
  });
};

// Returns null if user does not exist.
module.exports.findUser = (username, cb) => {
  User.findOne({name: username}, (err, user) => {
    if (err) {
      throw err;
    } else if (!user) {
      console.log('user does not exist');
      return cb(null);
    } else {
      cb(user);
    }
  });
};

module.exports.checkUserPassword = (username, password, cb) => {
  User.findOne({name: username}, (err, user) => {
    if (err) {
      throw err;
    } else if (!user) {
      console.log('user does not exist');
      return cb(null);
    } else {
      return user;
    }
  })
  .then((user) => {
    if (user.password === password) {
      console.log('PASSWORDS MATCH: ', 'Pword form mongo', user.password, 'Pword form POST', password);
    } else {
      console.log('PASSWORDS DO NOT MATCH: ', 'Pword form mongo', user.password, 'Pword form POST', password);
    }
  });
};


