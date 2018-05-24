import express from 'express'
const router = express.Router()

import collectionsController from '@/controllers/collections'

router.get('/', collectionsController.index)
router.get('/users', collectionsController.users)
router.get('/recipes', collectionsController.recipes)
router.get('/comments', collectionsController.comments)

export default router