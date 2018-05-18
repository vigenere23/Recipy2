import API from './API'

export default {
  fetchTest(route) {
    return API().get(route)
  }
}