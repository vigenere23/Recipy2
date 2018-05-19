import express from 'express'
const router = express.Router()

import testController from '../controllers/test'

router.get('/', testController.index)
router.get('/users', testController.users)
router.get('/recipes', testController.recipes)
router.get('/comments', testController.comments)

module.exports = router