<template>
  <form class="form" :method="get ? 'get' : 'post'" :enctype="{ fileUpload : 'multipart/form-data' }">
    <VueInput
      v-for="(input, i) in inputs" :key="i"
      :input="input"
      v-on="changeListener ? { input : changeListener } : {}">
    </VueInput>
  </form>
</template>


<script>
import VueInput from '@/wrappers/VueInput.vue'

export default {
  name: 'VueForm',
  components: {
    VueInput
  },
  props: {
    fileUpload: Boolean,
    get: Boolean,
    inputs: Array,
    send: Function,
    changeListener: Function // function(value, fieldName) {}
  }
}
</script>
