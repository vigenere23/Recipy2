import mongoose from 'mongoose'
var Schema = mongoose.Schema

var testSchema = new Schema({
  title: String,
  description: String
},
{
  collection: 'tests'
})

var Test = mongoose.model('Test', testSchema)

export default Test