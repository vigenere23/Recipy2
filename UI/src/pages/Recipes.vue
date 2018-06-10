<template>
  <div id="recipes">
    <RecipesContainer :recipes="recipes"></RecipesContainer>
  </div>
</template>


<script>
import recipeServices from '@/services/recipes'
import RecipesContainer from '@/containers/Recipes.vue'

export default {
	name: 'Recipes',
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
#recipes {
  margin: auto;
  max-width: 1000px;
	min-height: 100vh;
  padding: 40px 8px;
}
</style>
