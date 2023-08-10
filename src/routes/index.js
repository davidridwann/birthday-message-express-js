const express = require('express');
const { responseSuccess } = require('@src/utils/output');
const userRoute = require('./userRoute');

const router = express.Router();

router.get('/', (req, res) => {
  return responseSuccess(res, {
    message: 'Birthday Message - Backend Developer - Assessment Test',
  })
});

router.use('/user', userRoute);

module.exports = router;
