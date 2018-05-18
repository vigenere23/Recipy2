import express from 'express'
const router = express.Router()

import testController from '../controllers/testController'

router.get('/', testController.index)
router.get('/new', testController.new_get)
router.get('/all', testController.all)

module.exports = router