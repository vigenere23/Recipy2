<template>
  <div id="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: [
    'message'
  ]
}
</script>
