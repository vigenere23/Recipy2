import API from './API'

export default {
  async getRecipes() {
    return await API().get('/recipes/search')
  }
}