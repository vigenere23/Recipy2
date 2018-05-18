<template>
  <div id="test">
    <p>Welcome to the <strong>TEST</strong> page</p>
    <Message :message="message"></Message>
  </div>
</template>

<script>
import testServices from '@/services/testServices'
import Message from '@/components/Message.vue'

export default {
  name: 'Test',
  components: {
    Message
  },
  data() {
    return {
      message: "hello"
    }
  },
  mounted() {
    this.getTest()
  },
  methods: {
    async getTest() {
      const response = await testServices.fetchTest(this.$route.path)
      this.message = response.data
    }
  }
}
</script>
