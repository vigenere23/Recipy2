<template>
	<div class="recipe-card">
		<h3>{{ recipe.title }}</h3>
	</div>
</template>

<script>
export default {
	name: 'RecipeCard',
	props: {
		recipe: Object
	}
}
</script>

<style lang="scss">

</style>
