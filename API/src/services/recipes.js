import Recipe from '@/models/recipe'
import consts from '@/constants'

export default {

  generateSorting(query) {
    let sorts = consts.sorts
    let sortTypes = Object.keys(sorts)
    
    let sortType = sortTypes.includes(query.sort) ? sorts[query.sort] : 'createdAt'
    let sortOrder = consts.orders.includes(query.order) ? query.order : 'desc'

    return JSON.parse(`{ "${sortType}": "${sortOrder}" }`)
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