import express from 'express'
const router = express.Router()

import recipesController from '@/controllers/recipes'

router.get('/', recipesController.index)

router.get('/:id', recipesController.byId)
router.put('/:id', recipesController.byIdUpdate)
router.delete('/:id', recipesController.byIdDelete)

router.get('/new', recipesController.new)
router.post('/new', recipesController.newPost)


export default router