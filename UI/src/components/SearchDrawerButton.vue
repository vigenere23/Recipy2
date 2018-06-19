<template>
  <a id="search-drawer-button" @click="$store.showSearchDrawer = !$store.showSearchDrawer">
    <i class="material-icons">
			{{ $store.showSearchDrawer ? 'keyboard_arrow_right' : 'search' }}
		</i>
  </a>
</template>


<script>
export default {
  name: 'SearchDrawerButton'
}
</script>


<style lang="scss">
#search-drawer-button {
	padding: 8px;
	cursor: pointer;

	.material-icons {
		display: block;
	}
}
</style>
