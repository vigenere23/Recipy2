<template>
  <div id="header">
    <SideNavButton v-if="hasSideNav"></SideNavButton>
    <router-link to="/recipes" class="logo">Recipy</router-link>
  </div>
</template>


<script>
import SideNavButton from '@/components/SideNavButton.vue'

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
  height: 72px;
  background-color: white;
  position: absolute;
  padding: 16px;
  top: 0;
  box-shadow: $shadow-2dp;
  z-index: 99;

  .logo {
    font-family: 'Bariol', 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: $primary-color;
    display: flex;
    height: 100%;
    padding: 0 16px;
    align-items: center;
    justify-content: center;
    float: left;
  }
}
</style>
