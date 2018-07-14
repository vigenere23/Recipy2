<template>
  <div class="infobox">
    <span v-if="info.label" class="label">{{ info.label }}</span>
    <span class="text">{{ info.text }}</span>
  </div>
</template>


<script>
export default {
  name: 'Infobox',
  props: {
    info: Object
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

.infobox {
  margin-bottom: 16px;

  .label {
    font-size: 11px;
    color: $text-secondary;
    font-weight: 500;
    display: block;
    line-height: 16px;
  }

  .text {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
