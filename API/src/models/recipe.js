var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RecipeSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: [String],
    required: true,
    validate: {
      validator: v => v.length > 0,
      message: 'Should be at least 1 ingredient'
    }
  },
  steps: {
    type: [String],
    required: true,
    validate: {
      validator: v => v.length > 0,
      message: 'Should be at least 1 step'
    }
  },
  cookingTime: {
    type: Number,
    min: 0,
    validate: {
      validator: v => v.isInteger,
      message: "Should be in whole minutes"
    }
  },
  waitingTime: {
    type: Number,
    min: 0,
    validate: {
      validator: v => v.isInteger,
      message: "Should be in whole minutes"
    }
  },
  numberOfFavorites: {
    type: Number,
    default: 0,
    min: 0,
    validate: {
      validator: v => v.isInteger,
      message: "Should be an integer"
    }
  },
  numberOfBookmarks: {
    type: Number,
    default: 0,
    min: 0,
    validate: {
      validator: v => v.isInteger,
      message: "Should be an integer"
    }
  },
  commentsID: {
    type: [String]
  }
},
{
  collection: 'recipes'
})

var Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe