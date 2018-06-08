import mongoose from 'mongoose'
var Schema = mongoose.Schema

var RecipeSchema = new Schema({
  //timestamps: true,
  userID: {
		type: Schema.Types.ObjectId,
		ref: 'User',
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
      message: 'Should have at least 1 ingredient'
    }
  },
  steps: {
    type: [String],
    required: true,
    validate: {
      validator: v => v.length > 0,
      message: 'Should have at least 1 step'
    }
  },
  cookingTime: {
    type: Number,
    min: 0,
    validate: {
      validator: v => Number.isInteger(v),
      message: 'Should be in whole minutes'
    }
  },
  waitingTime: {
    type: Number,
    min: 0,
    validate: {
      validator: v => Number.isInteger(v),
      message: 'Should be in whole minutes'
    }
  },
  numberOfFavorites: {
    type: Number,
    default: 0,
    min: 0,
    validate: {
      validator: v => Number.isInteger(v),
      message: 'Should be an integer'
    }
  },
  numberOfBookmarks: {
    type: Number,
    default: 0,
    min: 0,
    validate: {
      validator: v => Number.isInteger(v),
      message: 'Should be an integer'
    }
  },
  mealTypes: {
    type: [Number],
    require: true,
    validate: [
      {
        validator: v => v.length >= 1 && v.length <= 2,
        message: 'Should have between 1 and 2 elements'
      },
      {
        validator: v => v.every(number => Number.isInteger(number) && number >= 0 && number <= 3),
        message: 'Elements should be between 0 and 3'
      }
    ]
  },
  commentIDs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment'
		}
	]
},
{
  collection: 'recipes'
})

// Methods



// Export

var Recipe = mongoose.model('Recipe', RecipeSchema)

export default Recipe
