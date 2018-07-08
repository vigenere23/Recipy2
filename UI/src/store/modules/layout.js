const state = {
  isSmallScreen: false,
  isMenuDrawerVisible: false,
  isSearchDrawerVisible: false
}

const mutations = {
  changeScreenSize(state, isSmallScreen) {
    state.isSmallScreen = isSmallScreen
  },

  showMenuDrawer(state) {
    state.isMenuDrawerVisible = true
  },

  hideMenuDrawer(state) {
    state.isMenuDrawerVisible = false
  },

  toggleMenuDrawer(state) {
    state.isMenuDrawerVisible = !state.isMenuDrawerVisible
  },

  showSearchDrawer(state) {
    state.isSearchDrawerVisible = true
  },

  hideSearchDrawer(state) {
    state.isSearchDrawerVisible = false
  },

  toggleSearchDrawer(state) {
    state.isSearchDrawerVisible = !state.isSearchDrawerVisible
  }
}

export default {
  namespaced: true,
  state,
  mutations
}