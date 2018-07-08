import recipeServices from '@/services/recipes'

const state = {
  query: {
    title: "",
    sort: "",
    order: ""
  },
  recipes: []
}

const mutations = {
  updateQueryField(state, {fieldName, value}) {
    state.query[fieldName] = value
  },

  updateRecipes(state, recipes) {
    state.recipes = recipes
  }
}

const actions = {
  async getRecipes({commit}, path) {
    let response = await recipeServices.getRecipes(path)
    commit('updateRecipes', response.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}