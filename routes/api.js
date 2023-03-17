const express = require('express');
const router = express.Router();

const runActions = require('../actions/runActions')

router.get('/runs', runActions.getAllRuns)
router.get('/runs/:id', runActions.getRun)
router.post('/runs', runActions.saveRun)
router.put('/runs/:id', runActions.updateRun)
router.delete('/runs/:id', runActions.deleteRun)

module.exports = router;