<template>
<div id="default-layout" :class="{'show-side-drawer': rightDrawerOpened}">
  <Header :nav="nav"></Header>
  <DrawerScreen></DrawerScreen>
  <SearchDrawer></SearchDrawer>
  <MenuDrawer :nav="nav"></MenuDrawer>
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
        'all',
				'breakfeast',
				'lunch',
				'dinner',
				'dessert'
			]
		}
	},
	methods: {
		handleRightDrawerOpenedEvent(isOpened) {
			this.rightDrawerOpened = isOpened
		}
	},
	mounted() {
		bus.$on('rightDrawerOpenedEvent', this.handleRightDrawerOpenedEvent)
	},
	beforeDestroyed() {
		bus.$off('rightDrawerOpenedEvent')
	}
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#default-layout {
	margin-right: 0;
	transition: margin-right 250ms $ease-in-out;

	&.show-right-drawer {
		margin-right: 240px;
		transition: margin-right 200ms $ease-in-out;
	}
}
</style>
