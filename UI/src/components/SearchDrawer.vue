<template>
  
</template>


<script>
import bus from '@/EventBus'

export default {
  name: 'SearchDrawer',
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    handleRightDrawerOpenedEvent(isOpened) {
      bus.$emit('showDrawerScreenCmd', true)
      this.isOpened = isOpened
    }
  },
  mounted() {
    bus.$on('rightDrawerOpenedEvent', this.handleRightDrawerOpenedEvent)
  },
  beforeDestroyed() {
    bus.$0ff('rightDrawerOpenedEvent')
  }
}
</script>
