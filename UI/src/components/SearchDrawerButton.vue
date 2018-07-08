<template>
  <a id="search-drawer-button" @click="handleClick">
    <i class="material-icons">
			{{ isSearchDrawerVisible ? 'keyboard_arrow_right' : 'search' }}
		</i>
  </a>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SearchDrawerButton',
  computed: mapState('layout', [
    'isSearchDrawerVisible'
  ]),
  methods: {
    handleClick() {
      if (!this.isSearchDrawerVisible && this.$route.path != '/recipes/find') {
        this.$router.push('/recipes/find')
      }
      this.toggleSearchDrawer
    },
    ...mapMutations('layout', [
      'toggleSearchDrawer'
    ])
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
