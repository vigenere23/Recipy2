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
    state.showMenuDrawer = true
  },

  hideMenuDrawer(state) {
    state.showMenuDrawer = false
  },

  toggleMenuDrawer(state) {
    state.showMenuDrawer = !state.showMenuDrawer
  },

  showSearchDrawer(state) {
    state.showSearchDrawer = true
  },

  hideSearchDrawer(state) {
    state.showSearchDrawer = false
  },

  toggleSearchDrawer(state) {
    state.showSearchDrawer = !state.showSearchDrawer
  }
}

export default {
  namespaced: true,
  state,
  mutations
}