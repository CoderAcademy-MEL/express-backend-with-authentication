const express = require('express')
const router = express.Router()

router.use(express.json())

router.use('/auth', require('./auth-routes'))
router.use('/user', require('./user-routes'))
router.use('/seed', require('./seed-routes'))

module.exports = router