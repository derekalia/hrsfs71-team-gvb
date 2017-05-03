const User = require('./schemas/users.js');
const dbUtils = require('./utils.js');

var seedUsers = [
  { username: 'player1',
    password: 'password1'
  },
  { username: 'player2',
    password: 'password2'
  },
  { username: 'player3',
    password: 'password3'
  },
];

User.remove({}, () => {
  seedUsers.forEach((user) => {
    dbUtils.addUser(user.username, user.password, (user) => console.log('added user ', user.name, ' to db'));
  });
});