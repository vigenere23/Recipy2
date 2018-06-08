import express from 'express'
const router = express.Router()

import userController from '@/controllers/users'

router.get('/', userController.index)

router.get('/:id', userController.byId)
// router.put('/:id', userController.byIdUpdate)
// router.delete('/:id', userController.byIdDelete)

// router.get('/new', userController.new)
// router.post('/new', userController.newPost)


export default router