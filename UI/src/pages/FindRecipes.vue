<template>
  <div id="find-recipes">
    <RecipesContainer :recipes="recipes"></RecipesContainer>
  </div>
</template>


<script>
import bus from '@/EventBus'
import recipeServices from '@/services/recipes'
import RecipesContainer from '@/containers/Recipes.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'FindRecipes',
  components: {
		RecipesContainer
  },
  computed: mapState('recipes', [
    'recipes'
  ]), 
  methods: mapActions('recipes', [
    'getRecipes'
  ]),
	watch: {
		$route() {
			this.getRecipes(this.$route.fullPath)
		}
  },
	mounted() {
    this.getRecipes(this.$route.fullPath)
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
