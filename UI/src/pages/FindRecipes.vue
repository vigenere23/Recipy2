<template>
  <DefaultLayout>
    <div id="find-recipes">
      <RecipesContainer :recipes="recipes"></RecipesContainer>
    </div>
  </DefaultLayout>
</template>


<script>
import bus from '@/EventBus'
import recipeServices from '@/services/recipes'
import DefaultLayout from '@/layouts/Default.vue'
import RecipesContainer from '@/containers/Recipes.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'FindRecipes',
  components: {
    DefaultLayout,
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
