<template>
  <DefaultLayout>
    <div id="find-recipes">
      <RecipesContainer v-if="recipes.length" :recipes="recipes"></RecipesContainer>
      <NoRecipeFound v-else></NoRecipeFound>
    </div>
  </DefaultLayout>
</template>


<script>
import bus from '@/EventBus'
import recipeServices from '@/services/recipes'
import DefaultLayout from '@/layouts/Default.vue'
import RecipesContainer from '@/containers/Recipes.vue'
import NoRecipeFound from '@/components/NoRecipeFound.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'FindRecipes',
  components: {
    DefaultLayout,
    RecipesContainer,
    NoRecipeFound
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

</style>
