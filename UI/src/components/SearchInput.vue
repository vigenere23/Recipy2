<template>
  <div :class="{ 'search-input': true, editing }">
    <span :class="{ label: true, minimized: text || editing }">{{ label }}</span>
    <input class="text" v-model="text" @focus="startEditing" @blur="stopEditing">
    <i v-if="text" class="material-icons eraser" @click="clearText">cancel</i>
  </div>
</template>


<script>
export default {
  name: 'SearchInput',
  props: {
    name: String,
    label: String,
    width: String
  },
  data() {
    return {
      text: '',
      editing: false
    }
  },
  methods: {
    clearText() {
      this.text = ''
    },
    startEditing() {
      this.editing = true
    },
    stopEditing() {
      this.editing = false
    }
  },
  watch: {
    text() {
      this.$emit('input', this.text, this.name)
    }
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

.search-input {
  font-family: 'Roboto', arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  color: $text-primary;
  padding: 24px 8px 8px 16px;
  background-color: $grey-100;
  border-radius: 4px 4px 0 0;
  border-bottom: solid 2px $text-secondary;
  cursor: pointer;
  transition: background-color 200ms $ease-in-out, border 200ms $ease-in-out;

  &:hover {
    background-color: $grey-300;
  }

  &.editing {
    background-color: $grey-400;
    border-bottom: solid 2px $primary-color;
  }

  .label {
    color: $text-secondary;
    font-weight: 500;
    position: absolute;
    left: 16px;
    bottom: 8px;
    font-size: 16px;
    line-height: 24px;
    transition: all 200ms $ease-in-out;

    &.minimized {
      font-size: 11px;
      line-height: 16px;
      bottom: 32px;
      transition: all 150ms $ease-in-out;
    }
  }

  .text, .eraser {
    display: inline-block;
    vertical-align: middle;
    line-height: 24px;
  }

  .text {
    font-size: 16px;
    background: none;
    border: 0;
    padding: 0;
    height: 24px;
    width: calc(100% - 24px);
  }

  .eraser {
    float: right;
  }
}
</style>
