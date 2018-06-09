<template>
	<div class="recipes-container">
		<RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe"></RecipeCard>
	</div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'

export default {
	name: 'RecipeContainer',
	components: {
		RecipeCard
	},
	props: {
		recipes: Array
	}
}
</script>

<style lang="scss">
.recipes-container {
	width: 100%;
	height: 100%;
	display: flex;
}
</style>
