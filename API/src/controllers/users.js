import User from '@/models/user'
// import Recipe from '@/models/recipe'

export default {

  async index(req, res) {
    try {
      res.status(200).send(await User.find())
    }
    catch (err) {
      res.status(500).send(err)
    }
  },

  async byId(req, res) {
    try {
      res.status(200).send(await User.findById(req.params.id))
    }
    catch (err) {
      res.status(500).send(err)
    }
  },
/*
  async getRecipes2(req, res) {
    try {
      res.status(200).send(await Recipe.find({author: req.params.id}))
    }
    catch (err) {
      res.status(500).send(err)
    }
  },
*/
  async getRecipes(req, res) {
    try {
      var user = await User.findById(req.params.id).populate('recipes')
      res.status(200).send(user.recipes)
    }
    catch (err) {
      res.status(500).send(err)
    }
  }

  

}