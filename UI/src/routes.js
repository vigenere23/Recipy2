// Layouts
import DefaultLayout from '@/layouts/Default.vue'
import ReducedLayout from '@/layouts/Reduced.vue'

// Pages
import RecipesPage from '@/pages/Recipes.vue'

const routes = [
	{ path: '/', redirect: '/recipes' },

	{ path: '*/new', component: ReducedLayout },

	{ path: '*', component: DefaultLayout, children: [

		{ path: 'recipes', redirect: '/recipes/search' },
		{ path: 'recipes/*', component: RecipesPage }

	] }
]

export default routes