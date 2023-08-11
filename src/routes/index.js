const express = require('express');
const { responseSuccess } = require('@src/utils/output');
const userRoute = require('./userRoute');
const locationRoute = require('./locationRoute');
const jobRoute = require('./jobRoute');

const router = express.Router();

router.get('/', (req, res) => {
  return responseSuccess(res, {
    message: 'Birthday Message - Backend Developer - Assessment Test',
  })
});

router.use('/user', userRoute);
router.use('/location', locationRoute);
router.use('/birthday-logs', jobRoute);

module.exports = router;
