<template>
  <div id="menu-drawer" :class="{ show: $store.showMenuDrawer && $store.isSmallScreen }">
    <!-- profile section with profile pic and background -->
    <DrawerNav :nav="nav"></DrawerNav>
  </div>
</template>


<script>
import DrawerNav from '@/components/DrawerNav.vue'

export default {
  name: 'MenuDrawer',
  props: {
    nav: Array
  },
  components: {
    DrawerNav
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#menu-drawer {
  width: $drawer-width;
  position: fixed;
  left: -100%;
  top: 0;
  bottom: 0;
  background-color: white;
  color: $text-secondary;
  z-index: 90;
  transition: left 300ms $ease-in-out;

  &.show {
    left: 0;
    transition: left 250ms $ease-out;
  }
}
</style>
