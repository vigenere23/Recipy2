<template>
  <div id="menu-drawer" :class="{ open: isOpened }">
    <!-- profile section with profile pic and background -->
    <DrawerNav :nav="nav"></DrawerNav>
  </div>
</template>


<script>
import DrawerNav from '@/components/DrawerNav.vue'
import bus from '@/EventBus'

export default {
  name: 'MenuDrawer',
  props: {
    nav: Array
  },
  components: {
    DrawerNav
  },
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    handleLeftDrawerOpenedEvent(isOpened) {
      if (isOpened) {
        bus.$emit('showDrawerScreenCmd', true)
      }
      
      this.isOpened = isOpened
    },
    handleIsSmallScreenEvent(isSmallScreen) {
      if (!isSmallScreen) {

        if (this.isOpened) {
          bus.$emit('showDrawerScreenCmd', false)
        }
        
        bus.$emit('leftDrawerOpenedEvent', false)
      }
    }
  },
  mounted() {
    bus.$on('leftDrawerOpenedEvent', this.handleLeftDrawerOpenedEvent)
    bus.$on('isSmallScreenEvent', this.handleIsSmallScreenEvent)
  },
  beforeDestroyed() {
    bus.$off('leftDrawerOpenedEvent')
    bus.$off('isSmallScreenEvent')
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

  &.open {
    left: 0;
    transition: left 250ms $ease-out;
  }
}
</style>
