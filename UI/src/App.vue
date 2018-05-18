<template>
  <div id="app">
    <Message :message="message"></Message>
  </div>
</template>

<script>
import Message from '@app/components/Message.vue'

export default {
  name: 'App',
  components: {
    Message
  },
  data () {
    return {
      message: "Hello, world!"
    }
  }
}
</script>

<style lang="scss">

</style>
