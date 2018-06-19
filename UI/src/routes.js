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
    { path: 'recipes/find', name: 'find', component: FindRecipesPage },
    { path: 'recipes/explore', name: 'explore', compoonent: ExploreRecipesPage },
		{ path: 'recipes/:id', component: SingleRecipePage } 

	] }
]

export default routes