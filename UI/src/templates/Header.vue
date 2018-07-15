<template>
  <div id="header" :class="{ float: isScrolledTop }">
    <div id="left-header">
      <MenuDrawerButton v-if="isSmallScreen"></MenuDrawerButton>
      <router-link to="/recipes" class="logo">Recipy</router-link>
    </div>
    <div id="right-header">
      <HeaderNav v-if="!isSmallScreen" :nav="nav"></HeaderNav>
      <SigninButton></SigninButton>
      <SearchDrawerButton></SearchDrawerButton>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

import HeaderNav from '@/wrappers/HeaderNav.vue'
import SigninButton from '@/components/header/SigninButton.vue'
import MenuDrawerButton from '@/components/drawers/MenuDrawerButton.vue'
import SearchDrawerButton from '@/components/drawers/SearchDrawerButton.vue'

export default {
  name: 'Header',
  components: {
    MenuDrawerButton,
    HeaderNav,
    SigninButton,
    SearchDrawerButton
  },
  props: {
    nav: Array
  },
	data() {
		return {
      isScrolledTop: false
		}
  },
  computed: mapState('layout', [
    'isSmallScreen'
  ]),
	methods: {
		handleScrollEvent(e) {
			this.isScrolledTop = e.pageY > 10
    }
	},
	mounted () {
    window.addEventListener('scroll', this.handleScrollEvent);
  },
  beforeDestroyed () {
    window.removeEventListener('scroll');
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#header {
  width: inherit;
  height: 56px;
  background-color: white;
  position: fixed;
  padding: 0 16px;
  top: 0;
	left: 0;
	right: 0;
  z-index: 50;
	display: flex;
	flex-direction: left;
	align-items: center;
	justify-content: space-between;
  color: $text-secondary;
	transition: box-shadow 300ms $ease-in-out;

	&.float {
		@include shadow(4);
		transition: box-shadow 200ms $ease-in-out;
	}

  .logo {
    font-family: 'Bariol', 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: $primary-color;
    display: flex;
    height: 100%;
    padding: 0 8px;
    align-items: center;
    justify-content: center;
  }

  > * {
    display: flex;
    align-items: center;
    height: 100%;
  }

  > #left-header > *:not(:last-child), > #right-header > *:not(:last-child) {
    margin-right: 8px;
  }
}
</style>
