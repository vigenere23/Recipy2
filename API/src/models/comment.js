import mongoose from 'mongoose'
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
    required: true
	},
  text: {
    type: String,
    required: true
  }
},
{
  timestamps: true
},
{
  collection: 'comments'
})

var Comment = mongoose.model('Comment', CommentSchema)

export default Comment