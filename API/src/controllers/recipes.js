import Recipe from '@/models/recipe'
import consts from '@/constants'

export default {

  async index(req, res) {
    try {
      res.status(200).send(await Recipe.find())
    }
    catch (err) {
      res.status(500).send(err)
    }
  },

  async search(req, res) {
    try {

      let sort = (req.query.sort && consts.sorts.includes(req.query.sort)) ? req.query.sort : 'createdAt'
      let order = (req.query.order && consts.orders.includes(req.query.order)) ? req.query.order : 'desc'

      let params = JSON.parse(`{ "${sort}": "${order}" }`)

      res.status(200).send(await Recipe.find({/*name: regexp*/}).sort(params))

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