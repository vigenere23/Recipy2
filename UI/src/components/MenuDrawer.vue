<template>
  
</template>


<script>
import bus from '@/EventBus'

export default {
  name: 'MenuDrawer',
  props: {
    nav: Array
  },
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    handleLeftDrawerOpenedEvent(isOpened) {
      if (isOpened) {
        bus.$emit('showDrawerScreenCmd')
      }
      
      this.isOpened = isOpened
    }
  },
  mounted() {
    bus.$on('leftDrawerOpenedEvent', this.handleLeftDrawerOpenedEvent)
  },
  beforeDestroyed() {
    bus.$0ff('leftDrawerOpenedEvent')
  }
}
</script>
