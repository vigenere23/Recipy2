import API from './API'

var route = "/collections/"

export default {
  getCollectionEntries(collection) {
    return API().get(route + collection)
  }
}