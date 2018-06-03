import mongoose from 'mongoose'
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  timestamps: true,
  userID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  }
},
{
  collection: 'comments'
})

var Comment = mongoose.model('Comment', CommentSchema)

export default Comment