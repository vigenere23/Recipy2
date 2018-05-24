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
  recipesID: {
    type: [Schema.Types.ObjectID]
  },
  favoritesID: {
    type: [Schema.Types.ObjectID]
  },
  bookmarksID: {
    type: [Schema.Types.ObjectID]
  }
},
{
  collection: 'users'
})

var User = mongoose.model('User', UserSchema)

export default User