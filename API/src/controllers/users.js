import User from '@/models/user'

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
  }

}