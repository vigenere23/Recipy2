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
  recipes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe'
		}
	],
  favorites: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe'
		}
],
  bookmarks: [
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