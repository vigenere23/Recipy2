import User from '../models/user'
import Recipe from '../models/recipe'
import Comment from '../models/comment'

exports.index = (req, res) => {
  res.send('test/index page')
}

exports.users = (req, res) => {
  User.find().then(users => {
    res.send(users)
  }).catch(err => {
    res.send(err)
  })
}

exports.recipes = (req, res) => {
  Recipe.find().then(recipes => {
    res.send(recipes)
  }).catch(err => {
    res.send(err)
  })
}

exports.comments = (req, res) => {
  Comment.find().then(comments => {
    res.send(comments)
  }).catch(err => {
    res.send(err)
  })
}