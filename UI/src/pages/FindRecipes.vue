<template>
  <DefaultLayout>
    <div id="find-recipes">
      <RecipesList v-if="recipes.length" :recipes="recipes"></RecipesList>
      <ErrorMessage v-else text="No recipes found!"></ErrorMessage>
    </div>
  </DefaultLayout>
</template>


<script>
import { mapState } from 'vuex'

import bus from '@/EventBus'
import recipeServices from '@/services/recipes'

import DefaultLayout from '@/layouts/Default.vue'
import RecipesList from '@/wrappers/RecipesList.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
	name: 'FindRecipes',
  components: {
    DefaultLayout,
    RecipesList,
    ErrorMessage
  },
  computed: mapState('recipes', [
    'recipes'
  ])
}
</script>


<style lang="scss">

</style>
