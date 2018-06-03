import mongoose from 'mongoose'
var Schema = mongoose.Schema

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  recipeIDs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe'
		}
	],
  favoritedIDs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe'
		}
],
  bookmarkedIDs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe'
		}
	]
},
{
  collection: 'users'
})

// Methods

UserSchema.query.random = async function() {
	try {
		var count = await this.count()
		var randomNumber = Math.floor(Math.random() * count)
		return this.findOne().skip(randomNumber)
	}
	catch (err) {
		console.log('ERR: Could not find a random doc')
		console.error(err)
	}
}

// Saving model

var User = mongoose.model('User', UserSchema)

export default User