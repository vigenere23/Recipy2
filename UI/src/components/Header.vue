<template>
  <div id="header">
    <router-link to="/recipes" class="logo">Recipy</router-link>
		<HeaderNav></HeaderNav>
  </div>
</template>


<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'Header',
  components: {
    SideNavButton
  },
  props: [
    'hasSideNav'
  ]
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#header {
  width: 100%;
  height: 64px;
  background-color: white;
  position: absolute;
  padding: 16px;
  top: 0;
  box-shadow: $shadow-2dp;
  z-index: 99;
	display: flex;
	flex-direction: left;
	align-items: center;
	justify-content: space-between;

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
