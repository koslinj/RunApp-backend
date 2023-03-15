const express = require('express');
const router = express.Router();

const runActions = require('../actions/runs')


router.get('/', runActions.saveRun)

module.exports = router;