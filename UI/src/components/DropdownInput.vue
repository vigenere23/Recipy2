<template>
  <div
    :class="{ 'dropdown-input': true, opened}"
    @click="toggle"
    v-click-outside="close"
    :style="{ width: width || '100%' }"
  >
    <span :class="{ label: true, minimized: selected.value || opened }">{{ label }}</span>
    <span class="value">{{ selected.text }}</span>
    <i class="material-icons arrow">arrow_drop_down</i>
    <ul class="options">
      <li
        v-for="(option, i) in options" :key="i"
        :class="{ selected: option.value === selected.value }"
        @click="changeSelection(option)"
      >{{ option.text }}</li>
    </ul>
    <select :name="name" v-model="selected.value" style="display: none;">
      <option v-for="(option, i) in options" :key="i">{{ option.value }}</option>
    </select>
  </div>
</template>


<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'DropdownInput',
  props: {
    options: Array,
    name: String,
    label: String,
    width: String
  },
  data() {
    return {
      selected: {},
      opened: false,
      default: this.options.find(option => option.default)
    }
  },
  methods: {
    changeSelection(option) {
      this.selected = option
      this.$emit('input', this.selected.value, this.name)
    },
    close() {
      this.opened = false
    },
    toggle() {
      this.opened = !this.opened
    }
  },
  directives: {
    ClickOutside
  },
  mounted() {
    this.selected = this.default || {}
    this.popupItem = this.$el
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

.dropdown-input {
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

  .value, .arrow {
    display: inline-block;
    vertical-align: baseline;
    line-height: 24px;
  }

  .value {
    font-size: 16px;
  }

  .arrow {
    float: right;
  }

  &.opened {
    background-color: $grey-400;
    border-bottom: solid 2px $primary-color;
  }

  &.opened .options {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transition: opacity 150ms $ease-in-out, transform 150ms $ease-in-out;
  }

  &.opened .material-icons {
    transform: rotate(180deg);
  }

  .options {
    list-style: none;
    text-indent: 0;
    padding: 8px 0;
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    @include shadow(8);
    border-radius: 0 0 4px 4px;
    background-color: white;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
    transform-origin: top left;
    transition: visibility 0s linear 200ms, transform 0s linear 200ms, opacity 200ms $ease-in-out;
    
    li {
      padding-left: 16px;
      padding-right: 8px;
      line-height: 42px;
      cursor: pointer;
      transition: background-color 200ms $ease-in-out;

      &.selected, &:hover {
        background-color: #F5F5F5;
      }
    }
  }

  select {
    display: none;
  }
}
</style>
