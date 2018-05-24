<template>
  <div id="message">
    <pre>{{ message }}</pre>
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
