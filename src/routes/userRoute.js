const { userController } = require('@src/controllers');
const { userMiddleware } = require('@src/middlewares');
const express = require('express');

const router = express.Router();

router.get('/', userController.getUsers);

module.exports = router;