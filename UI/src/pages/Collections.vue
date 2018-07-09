<template>
<ReducedLayout>
  <div id="collections">
    <pre>{{ message }}</pre>
  </div>
</ReducedLayout>
</template>

<script>
import collectionServices from '@/services/collections'
import ReducedLayout from '@/layouts/Reduced.vue'

export default {
  name: 'Collections',
  components: {
    ReducedLayout
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
        collectionServices.getCollectionEntries(this.$route.params.collection).then(response => {
          this.message = JSON.stringify(response.data, null, 2)
        })
      } else {
        this.message = "Please append the url with a collection name (plural)"
      }
    }
  }
}
</script>
