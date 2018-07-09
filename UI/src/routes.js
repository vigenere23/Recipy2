import consts from '@/constants'
const nav = consts.nav

// Recipes pages
import FindRecipesPage from '@/pages/FindRecipes.vue'
import ExploreRecipesPage from '@/pages/ExploreRecipes.vue'
import SingleRecipePage from '@/pages/SingleRecipe.vue'

// Collections pages
import CollectionsPage from '@/pages/Collections.vue'

// Other pages
import PageNotFound from '@/pages/PageNotFound.vue'


const routes = [
  { path: '/', redirect: '/recipes' },

  // Recipes
  { path: '/recipes', redirect: '/recipes/find' },
  { path: nav[0].path, name: nav[0].name, component: FindRecipesPage },
  { path: nav[1].path, name: nav[1].name, component: ExploreRecipesPage },
  { path: '/recipes/:id', component: SingleRecipePage },

  // Collections
  { path: '/collections', component: CollectionsPage },
  { path: '/collections/:collection', component: CollectionsPage },

  { path: '*', component: PageNotFound }
]

export default routes