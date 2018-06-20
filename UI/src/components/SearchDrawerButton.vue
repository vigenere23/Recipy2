<template>
  <a id="search-drawer-button" @click="handleClick">
    <i class="material-icons">
			{{ $store.showSearchDrawer ? 'keyboard_arrow_right' : 'search' }}
		</i>
  </a>
</template>


<script>
export default {
  name: 'SearchDrawerButton',
  methods: {
    handleClick() {
      if (!this.$store.showSearchDrawer && this.$route.path != '/recipes/find') {
        this.$router.push('/recipes/find')
      }
      this.$store.showSearchDrawer = !this.$store.showSearchDrawer
    }
  }
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
