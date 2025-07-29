const express = require('express')
const app = express()
const router = express.Router()

const newsController = require('../app/controller/NewController')
const NewController = require('../app/controller/NewController')

router.use('/', NewController.index)

module.exports = router
