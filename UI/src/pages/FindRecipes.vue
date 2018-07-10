<template>
  <DefaultLayout>
    <div id="find-recipes">
      <RecipesContainer v-if="recipes.length" :recipes="recipes"></RecipesContainer>
      <ErrorMessage v-else text="No recipes found!"></ErrorMessage>
    </div>
  </DefaultLayout>
</template>


<script>
import bus from '@/EventBus'
import recipeServices from '@/services/recipes'
import DefaultLayout from '@/layouts/Default.vue'
import RecipesContainer from '@/containers/Recipes.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'FindRecipes',
  components: {
    DefaultLayout,
    RecipesContainer,
    ErrorMessage
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
