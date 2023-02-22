const { userService } = require('../service');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const user = await userService.createUser(req.body);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },
};
