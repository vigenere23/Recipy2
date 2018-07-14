import Recipe from '@/models/recipe'
import recipesService from '@/services/recipes'

export default {

  async index(req, res) {
    try {
      res.status(200).send(await Recipe.find().populate('author'))
    }
    catch (err) {
      res.status(500).send(err)
      throw err
    }
  },

  async find(req, res) {
    try {

      let sort = recipesService.generateSorting(req.query)
      let query = recipesService.generateQuery(req.query)

      let results = await recipesService.filterResults(query, sort)

      res.status(200).send(results)

    }
    catch (err) {
			res.status(500).send(err)
			throw err
    }
  },

  async byId(req, res) {
    try {
      res.status(200).send(await Recipe.findById(req.params.id).populate('author'))
    }
    catch (err) {
      res.status(500).send(err)
      throw err
    }
  }

}