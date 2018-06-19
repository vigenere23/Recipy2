<template>
  <a id="menu-drawer-button" @click="$store.showMenuDrawer = !$store.showMenuDrawer">
    <i class="material-icons">menu</i>
  </a>
</template>


<script>
export default {
  name: 'MenuDrawerButton'
}
</script>


<style lang="scss">
#menu-drawer-button {
	padding: 8px;
	cursor: pointer;
  float: left;

	.material-icons {
		display: block;
	}
}
</style>