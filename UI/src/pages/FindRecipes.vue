<template>
  <div id="find-recipes">
    <RecipesContainer :recipes="recipes"></RecipesContainer>
  </div>
</template>


<script>
import bus from '@/EventBus'
import recipeServices from '@/services/recipes'
import RecipesContainer from '@/containers/Recipes.vue'

export default {
	name: 'FindRecipes',
  components: {
		RecipesContainer
  },
	data() {
		return {
			recipes: []
		}
	},
	mounted() {
    this.getRecipes()
	},
	watch: {
		$route() {
			this.getRecipes()
		}
	},
	methods: {
		async getRecipes() {
			let response = await recipeServices.getRecipes(this.$route.fullPath)
			this.recipes = response.data
		}
	}
}
</script>


<style lang="scss">
#find-recipes {
  margin: auto;
  max-width: 1000px;
	min-height: 100vh;
  padding: 40px 8px;
}
</style>
