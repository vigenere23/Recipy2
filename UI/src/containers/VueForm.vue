<template>
  <form class="form" :method="get ? 'get' : 'post'" :enctype="{ fileUpload : 'multipart/form-data' }">
    <slot></slot>
  </form>
</template>


<script>
export default {
  name: 'VueForm',
  props: {
    fileUpload: Boolean,
    get: Boolean,
    send: Function
  }
}
</script>
