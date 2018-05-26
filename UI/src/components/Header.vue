<template>
  <div id="header" :class="{ float: isScrolledTop }">
    <router-link to="/recipes" class="logo">Recipy</router-link>
		<HeaderNav :sideNavIcon="sideNavIcon"></HeaderNav>
  </div>
</template>


<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'Header',
  components: {
    HeaderNav
  },
	data() {
		return {
			sideNavIcon: 'search',
			isScrolledTop: false
		}
	},
	methods: {
		handleScroll(e) {
			this.isScrolledTop = e.pageY > 10 ? true : false
		}
	},
	created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#header {
  width: 100%;
  height: 64px;
  background-color: white;
  position: fixed;
  padding: 16px;
  top: 0;
	border-bottom: solid 1px $divider-color;
  z-index: 50;
	display: flex;
	flex-direction: left;
	align-items: center;
	justify-content: space-between;

	&.float {
		box-shadow: $shadow-4dp;
		/* transition: box-shadow $ease-in-out */
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
}
</style>
