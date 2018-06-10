import Recipe from '@/models/recipe'
import consts from '@/constants'

export default {

  async index(req, res) {
    try {
      res.status(200).send(await Recipe.find())
    }
    catch (err) {
      res.status(500).send(err)
      throw err
    }
  },

  async search(req, res) {
    try {

      let sort = consts.sorts.includes(req.query.sort) ? req.query.sort : 'createdAt'
			let order = consts.orders.includes(req.query.order) ? req.query.order : 'desc'
			let params = JSON.parse(`{ "${sort}": "${order}" }`)
			
			let query = {}
			if (req.query.title) query.title = new RegExp(req.query.title, 'i')
			if (Object.keys(consts.mealTypes).includes(req.query.type)) query.mealTypes = consts.mealTypes[req.query.type]

      res.status(200).send(await Recipe.find(query).sort(params))

    }
    catch (err) {
			res.status(500).send(err)
			throw err
    }
  },

  async byId(req, res) {
    try {
      res.status(200).send(await Recipe.findById(req.params.id))
    }
    catch (err) {
      res.status(500).send(err)
      throw err
    }
  }

}