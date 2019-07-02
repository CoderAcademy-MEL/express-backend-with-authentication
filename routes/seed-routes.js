const express = require('express');
const router = express.Router();
const { seed, viewUsers } = require('../controllers/seed-controller')

router.post('/', seed)
router.get('/view-users', viewUsers)

module.exports = router