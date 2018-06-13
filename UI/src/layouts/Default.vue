<template>
<div id="default-layout" :class="{'show-right-drawer': rightDrawerOpened && !isSmallScreen}">
  <Header :nav="nav"></Header>
  <DrawerScreen></DrawerScreen>
  <SearchDrawer></SearchDrawer>
  <MenuDrawer :nav="nav"></MenuDrawer>
	<router-view :key="$route.path"></router-view>
</div>
</template>


<script>
import bus from '@/EventBus'
import Header from '@/components/Header.vue'
import DrawerScreen from '@/components/DrawerScreen.vue'
import SearchDrawer from '@/components/SearchDrawer.vue'
import MenuDrawer from '@/components/MenuDrawer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    DrawerScreen,
    SearchDrawer,
    MenuDrawer
  },
	data() {
		return {
      rightDrawerOpened: false,
      nav: [
        /*'Home',*/
				{ name: 'find', path: '/recipes/find'},
				{ name: 'explore', path: '/recipes/explore' }
      ],
      isSmallScreen: false
		}
	},
	methods: {
		handleRightDrawerOpenedEvent(isOpened) {
			this.rightDrawerOpened = isOpened
		},
    handleIsSmallScreenEvent(isSmallScreen) {
      this.isSmallScreen = isSmallScreen
    }
	},
	mounted() {
		bus.$on('rightDrawerOpenedEvent', this.handleRightDrawerOpenedEvent)
    bus.$on('isSmallScreenEvent', this.handleIsSmallScreenEvent)
	},
	beforeDestroyed() {
		bus.$off('rightDrawerOpenedEvent')
    bus.$on('isSmallScreenEvent')
	}
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#default-layout {
  width: 100%;
	margin-top: 64px;
  background-color: $primary-color;
	transition: width $nav-closing;

	&.show-right-drawer {
    width: calc(100% - #{$drawer-width});
		transition: width $nav-opening;
	}
}
</style>
