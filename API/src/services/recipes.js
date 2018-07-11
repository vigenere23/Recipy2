import Recipe from '@/models/recipe'
import consts from '@/constants'

export default {

  generateSorting(query) {
    let sortTypes = consts.sorts
    let sortType = sortTypes.includes(query.sort) ? query.sort : 'createdAt'

    let orderTypes = consts.orders
    let orderType = orderTypes.includes(query.order) ? query.order : 'desc'

    return JSON.parse(`{ "${sortType}": "${orderType}" }`)
  },

  generateQuery(query) {
    let queryReturn = {}

    if (query.title) queryReturn.title = new RegExp(query.title, 'i')
    if (Object.keys(consts.mealTypes).includes(query.type)) queryReturn.mealTypes = consts.mealTypes[query.type]

    return queryReturn
  },

  async filterResults(query, sort) {
    return await Recipe
      .find(query, 'title numberOfFavorites numberOfBookmarks createdAt')
      .limit(50)
      .sort(sort)
      .populate('author', 'username')
  }

}