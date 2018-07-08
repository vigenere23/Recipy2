<template>
	<div id="drawer-screen" :class="{ show: showScreen }"	@click="closeDrawers"></div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DrawerScreen',
  computed: {
    showScreen() {
      return this.isSmallScreen && (this.isMenuDrawerVisible || this.isSearchDrawerVisible)
    },
    ...mapState('layout', [
      'isSmallScreen',
      'isMenuDrawerVisible',
      'isSearchDrawerVisible'
    ])
  },
  methods: {
    closeDrawers() {
      this.hideMenuDrawer()
      this.hideSearchDrawer()
    },
    ...mapMutations('layout', [
    'hideMenuDrawer',
    'hideSearchDrawer'
    ])
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#drawer-screen {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
  z-index: 80;
  visibility: hidden;
	background-color: rgba(0, 0, 0, 0);
	transition: background-color $nav-closing, visibility $nav-closing-duration;

	&.show {
		visibility: visible;
		background-color: $text-secondary;
		transition: background-color $nav-opening;
	}
}
</style>
