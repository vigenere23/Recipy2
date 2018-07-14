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

  updateRecipesState(state, recipes) {
    state.recipes = recipes
  }
}

const actions = {
  async updateRecipes({ commit, state }, query) {
    let response = await recipeServices.getRecipes(query || state.query)
    commit('updateRecipesState', response.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}