import API from './API'

export default {
  async getRecipes(route) {
    return await API().get(route)
  }
}