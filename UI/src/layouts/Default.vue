<template>
  <div id="default-layout" :class="{'show-right-drawer': isSearchDrawerVisible && !isSmallScreen}">
    <Header :nav="nav"></Header>
    <DrawerScreen></DrawerScreen>
    <SearchDrawer></SearchDrawer>
    <MenuDrawer :nav="nav"></MenuDrawer>
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

import consts from '@/constants'

import Header from '@/templates/Header.vue'
import MenuDrawer from '@/templates/MenuDrawer.vue'
import SearchDrawer from '@/templates/SearchDrawer.vue'
import DrawerScreen from '@/components/drawers/DrawerScreen.vue'

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
  height: 100%;
  min-height: 100vh;
	padding-top: 56px;
  background-color: $primary-color;
	transition: width $nav-closing;

	&.show-right-drawer {
    width: calc(100% - #{$drawer-width});
		transition: width $nav-opening;
	}

  .wrapper {
    margin: auto;
    padding: 40px 8px;
    max-width: 1000px;
    height: 100%;
    min-height: 100%;
  }
}
</style>
