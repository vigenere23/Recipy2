const state = {
  query: {
    title: "",
    sort: "",
    order: ""
  }
}

const mutations = {
  updateQueryField(state, {fieldName, value}) {
    state.query[fieldName] = value
  }
}

export default {
  namespaced: true,
  state,
  mutations
}