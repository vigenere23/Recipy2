var mongoose = require('mongoose')
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

module.exports = Comment