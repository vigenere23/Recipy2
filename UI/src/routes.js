import consts from '@/constants'
const nav = consts.nav

// Layouts
import DefaultLayout from '@/layouts/Default.vue'
// import ReducedLayout from '@/layouts/Reduced.vue'

// Pages
import FindRecipesPage from '@/pages/FindRecipes.vue'
import ExploreRecipesPage from '@/pages/ExploreRecipes.vue'
import SingleRecipePage from '@/pages/SingleRecipe.vue'

const routes = [
	{ path: '/', redirect: '/recipes' },

	{ path: '*', component: DefaultLayout, children: [

		{ path: 'recipes', redirect: '/recipes/find' },
    { path: nav[0].path, name: nav[0].name, component: FindRecipesPage },
    { path: nav[1].path, name: nav[1].name, compoonent: ExploreRecipesPage },
		{ path: 'recipes/:id', component: SingleRecipePage } 

	] }
]

export default routes