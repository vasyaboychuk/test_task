const argon2 = require('argon2');

module.exports = {
  hashPassword: async (password) => {
    const hash = await argon2.hash(password);
    return hash;
  },
};
