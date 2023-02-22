const router = require('express').Router();
const controller = require('../controller/os.controller');

router.get('/', controller.getFreeMemory);

module.exports = router;
