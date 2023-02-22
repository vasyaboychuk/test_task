const router = require('express').Router();
const controller = require('../controller/user.controller');

router.post('/sign-up', controller.createUser);

module.exports = router;
