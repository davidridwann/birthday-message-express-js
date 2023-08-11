const { jobController } = require('@src/controllers');
const express = require('express');

const router = express.Router();

router.get('/', jobController.getJobs);

module.exports = router;