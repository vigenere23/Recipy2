import User from '@/models/user'
import Recipe from '@/models/recipe'
import Comment from '@/models/comment'

export default {

  index: function (req, res) {
    res.send('Navigate to test/&lt;collection&gt; to see collection\'s entries');
  },

  users: function (req, res) {
    User.find().then(users => {
      res.send(users);
    }).catch(err => {
      res.send(err);
    });
  },

  recipes: function (req, res) {
    Recipe.find().then(recipes => {
      res.send(recipes);
    }).catch(err => {
      res.send(err);
    });
  },

  comments: function (req, res) {
    Comment.find().then(comments => {
      res.send(comments);
    }).catch(err => {
      res.send(err);
    });
  }

}
