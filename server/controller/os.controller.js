const os = require('os');
const ApiError = require('../error/ApiError');

module.exports = {
  getFreeMemory: async (req, res, next) => {
    try {
      const freeMemory = os.freemem();
      if (!freeMemory) {
        throw new ApiError('Bad request', 404);
      }
      const healthCheck = {
        freeMemory,
      };
      res.json(healthCheck);
    } catch (e) {
      next(e);
    }
  },
};
