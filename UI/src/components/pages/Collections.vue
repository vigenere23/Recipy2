<template>
  <div id="collections">
    <Message :message="message"></Message>
  </div>
</template>

<script>
import testServices from '@/services/collections'
import Message from '@/components/Message.vue'

export default {
  name: 'Collections',
  components: {
    Message
  },
  data() {
    return {
      message: "The collection '" + this.$route.params.collection + "' doesn't exist"
    }
  },
  mounted() {
    this.getCollectionEntries()
  },
  methods: {
    getCollectionEntries() {
      if (this.$route.params.collection) {
        testServices.getCollectionEntries(this.$route.params.collection).then(response => {
          this.message = JSON.stringify(response.data, null, 2)
        })
      } else {
        this.message = "Please append the url with a collection name (plural)"
      }
    }
  }
}
</script>
