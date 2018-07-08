<template>
  <div
    id="menu-drawer"
    :class="{ show: isMenuDrawerVisible && isSmallScreen }"
    @click="hideMenuDrawer"
  >
    <DrawerProfile></DrawerProfile>
    <div class="divider"></div>
    <DrawerNav :nav="nav"></DrawerNav>
  </div>
</template>


<script>
import DrawerProfile from '@/components/DrawerProfile.vue'
import DrawerNav from '@/components/DrawerNav.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MenuDrawer',
  props: {
    nav: Array
  },
  components: {
    DrawerProfile,
    DrawerNav
  },
  computed: mapState('layout', [
    'isSmallScreen',
    'isMenuDrawerVisible'
  ]),
  methods: {
    ...mapMutations('layout', [
      'hideMenuDrawer'
    ])
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#menu-drawer {
  width: $drawer-width;
  max-width: 85%;
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

  .divider {
    width: 100%;
    margin-bottom: 12px;
    border-top: solid 2px $divider-color;
  }
}
</style>
