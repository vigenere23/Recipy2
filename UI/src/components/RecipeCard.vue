<template>
	<div class="recipe-card">
    <router-link class="card" :to="recipe._id">
      <div class="img"></div>
      <p class="title">{{ recipe.title }}</p>
    </router-link>
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
@import '~@/assets/scss/variables';

$text-height: 3em;

.recipe-card {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 275px;

  &::after {
    content: "";
    display: block;
    padding-bottom: calc(100% + #{$text-height});
  }

  .card {
    position: absolute;
    top: 8px;
    bottom: 8px;
    right: 8px;
    left: 8px;
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: $shadow-1dp;
    transition: box-shadow 250ms $ease-in-out;

    &:hover {
      box-shadow: $shadow-4dp;
      transition: box-shadow 200ms $ease-out;
    }

    .img {
      width: 100%;
      height: calc(100% - #{$text-height});
      background-color: #f5f5f5;
    }

    .title {
      display: block;
      position: absolute;
      width: 100%;
      bottom: 0;
      padding-left: 1em;
      line-height: 3em;
      font-family: 'Open Sans';
      font-weight: 500;
      text-transform: uppercase;
      background-color: white;
    }
  }
}
</style>
