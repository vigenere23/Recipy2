import API from './API'

export default {
  async getRecipes(params) {
    return await API().get('/recipes/find', { params })
  }
}