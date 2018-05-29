<template>
  
</template>


<script>
import bus from '@/EventBus'

export default {
  name: 'SearchDrawer',
  data() {
    return {
      isOpened: false,
      isSmallScreen: false
    }
  },
  methods: {
    handleRightDrawerOpenedEvent(isOpened) {
      if (isOpened && this.isSmallScreen) {
        bus.$emit('showDrawerScreenCmd')
      }

      this.isOpened = isOpened
    },
    handleIsSmallScreenEvent(isSmallScreen) {
      this.isSmallScreen = isSmallScreen
    }
  },
  mounted() {
    bus.$on('rightDrawerOpenedEvent', this.handleRightDrawerOpenedEvent)
    bus.$on('isSmallScreenEvent', this.handleIsSmallScreenEvent)
  },
  beforeDestroyed() {
    bus.$0ff('rightDrawerOpenedEvent')
    bus.$off('isSmallScreenEvent')
  }
}
</script>
