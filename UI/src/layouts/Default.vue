<template>
<div id="default-layout" :class="{'show-right-drawer': isSearchDrawerVisible && !isSmallScreen}">
  <Header :nav="nav"></Header>
  <DrawerScreen></DrawerScreen>
  <SearchDrawer></SearchDrawer>
  <MenuDrawer :nav="nav"></MenuDrawer>
	<router-view :key="$route.path"></router-view>
</div>
</template>


<script>
import consts from '@/constants'
import Header from '@/components/Header.vue'
import DrawerScreen from '@/components/DrawerScreen.vue'
import SearchDrawer from '@/components/SearchDrawer.vue'
import MenuDrawer from '@/components/MenuDrawer.vue'
import { mapState } from 'vuex'

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
      nav: consts.nav
		}
  },
  computed: mapState('layout', [
    'isSmallScreen',
    'isSearchDrawerVisible'
  ])
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#default-layout {
  width: 100%;
	margin-top: 56px;
  background-color: $primary-color;
	transition: width $nav-closing;

	&.show-right-drawer {
    width: calc(100% - #{$drawer-width});
		transition: width $nav-opening;
	}
}
</style>
