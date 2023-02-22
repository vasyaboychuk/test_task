const { User } = require('../dataBase/User');
const { hashPassword } = require('./auth.service');

module.exports = {
  createUser: async (data) => {
    const { password } = data;
    const hashedPassword = await hashPassword(password);
    const newUser = { ...data, password: hashedPassword };

    return User.create(newUser);
  },
};
