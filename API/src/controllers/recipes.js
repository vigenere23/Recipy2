import User from '@/models/user'
import Recipe from '@/models/recipe'

export default {

  async index(req, res) {
    try {
      res.status(200).send(await Recipe.find())
    }
    catch (err) {
      res.status(500).send(err)
    }
  },

  async byId(req, res) {
    try {
      res.status(200).send(await Recipe.findById(req.params.id))
    }
    catch (err) {
      res.status(500).send(err)
    }
  }

}