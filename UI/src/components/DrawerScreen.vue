<template>
	<div id="drawer-screen" :class="{ show: showScreen }"	@click="closeDrawers"></div>
</template>


<script>
export default {
  name: 'DrawerScreen',
  computed: {
    showScreen() {
      return this.$store.isSmallScreen &&
        (this.$store.showMenuDrawer || this.$store.showSearchDrawer)
    }
  },
  methods: {
    closeDrawers() {
      this.$store.showMenuDrawer = false
      this.$store.showSearchDrawer = false
    }
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
