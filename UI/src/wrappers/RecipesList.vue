<template>
	<div class="recipes-list">
		<RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe"></RecipeCard>
	</div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'

export default {
	name: 'RecipesList',
	components: {
		RecipeCard
	},
	props: {
		recipes: Array
	}
}
</script>

<style lang="scss">
.recipes-list {
	display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
