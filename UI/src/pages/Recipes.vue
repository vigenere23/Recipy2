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
			recipes: null
		}
	},
	mounted() {
		this.getRecipes()
	},
	methods: {
		async getRecipes() {
			let response = await recipeServices.getRecipes()
			this.recipes = response.data
		}
	}
}
</script>


<style lang="scss" scoped>

</style>
