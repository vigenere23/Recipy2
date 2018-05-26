<template>
  <a id="side-nav-button" v-on:click="toggleSideNav">
    <i class="material-icons">menu</i>
  </a>
</template>


<script>
export default {
  name: 'SideNavButton'
}
</script>


<style lang="scss" scoped>
#side-nav-button {
	padding: 8px;
	cursor: pointer;
	margin-right: 8px;

	.material-icons {
		display: block;
	}
}
</style>
