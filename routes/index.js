const express = require('express')
const router = express.Router()

router.use(express.json())

router.use('/auth', require('./auth-routes'))

module.exports = router