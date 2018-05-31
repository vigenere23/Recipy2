<template>
  <a id="menu-drawer-button" @click="emitLeftDrawerOpenedEvent(!menuDrawerOpened)">
    <i class="material-icons">menu</i>
  </a>
</template>


<script>
import bus from '@/EventBus'

export default {
  name: 'MenuDrawerButton',
  data() {
    return {
      isSmallScreen: false,
      menuDrawerOpened: false
    }
  },
  methods: {
    handleIsSmallScreenEvent(isSmallScreen) {
      this.isSmallScreen = isSmallScreen
    },
    emitLeftDrawerOpenedEvent(isOpened) {
			bus.$emit('leftDrawerOpenedEvent', isOpened)
		},
    handleLeftDrawerOpenedEvent(isOpened) {
      this.isOpened = isOpened
    }
  },
  mounted() {
    bus.$on('isSmallScreenEvent', this.handleIsSmallScreenEvent)
    bus.$on('leftDrawerOpenedEvent', this.handleLeftDrawerOpenedEvent)
  },
  beforeDestroyed() {
    bus.$off('isSmallScreenEvent')
    bus.$off('leftDrawerOpenedEvent')
  }
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