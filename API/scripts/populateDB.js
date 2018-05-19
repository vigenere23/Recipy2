var mongoose = require('mongoose')
var consts = require('../src/constants')

var user = require('../model_templates/user')
var recipe = require('../model_templates/recipe')
var comment = require('../model_templates/comment')

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
