import mongoose from 'mongoose'
var Schema = mongoose.Schema

var CommentSchema = new Schema({
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