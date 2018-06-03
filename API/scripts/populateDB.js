import mongoose from 'mongoose'
import consts from '@/constants'
import user from '@/model_templates/user'
import recipe from '@/model_templates/recipe'
import comment from '@/model_templates/comment'

comment.recipesID = recipe._id
recipe.userID = user._id

mongoose.connect(consts.DB_PATH).then(async () => {

  console.log('Connected to database')
  console.log('Beggining populating DB with model templates\n...')

  for (var i = 0; i < 5; i++) {
    recipe.commentsID.push(comment._id)
    user.recipesID.push(recipe._id)
  }

  try {
    await comment.save()
    await recipe.save()
    await user.save()
    console.log('DONE!')
  }
  catch (err) {
    console.log('ERR: Could not save a collection')
    console.error(err)
  }

}, err => {

  console.log('ERR: Could not connect to database (probably wrong URL)')
  console.error(err)

})
