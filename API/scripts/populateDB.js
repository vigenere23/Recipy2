import mongoose from 'mongoose'
import consts from '@/constants'

import user from '@/model_templates/user'
import recipe from '@/model_templates/recipe'
import comment from '@/model_templates/comment'

comment.recipesID = recipe._id
recipe.userID = user._id

mongoose.connect(consts.DB_PATH).then(result => {
  console.log('Connected to database')
  console.log('Beggining populating DB...')
  for (var i = 0; i < 5; i++) {
    recipe.commentsID.push(comment._id)
    user.recipesID.push(recipe._id)
  }
  comment.save().then(() => {
    recipe.save().then(() => {
      user.save()
    })
  })
}).then(() => {
  console.log("DONE")
}).catch(err => {
  throw err
})
