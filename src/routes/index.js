const express = require('express');
const { responseSuccess } = require('@src/utils/output');

const router = express.Router();

router.get('/', (req, res) => {
  return responseSuccess(res, {
    message: 'Birthday Message API TEST',
  })
});

module.exports = router;
