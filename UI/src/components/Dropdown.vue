<template>
  <div
    :class="{ dropdown: true, opened: opened }"
    @click="opened = !opened"
    v-click-outside="close"
    :style="{ width: width || '120px' }"
  >
    <span>{{ selected }}</span>
    <i class="material-icons">arrow_drop_down</i>
    <ul class="options">
      <li
        v-for="(option, i) in options" :key="i"
        :class="{ selected: option == selected }"
        @click="changeSelection"
      >{{ option }}</li>
    </ul>
  </div>
</template>


<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Dropdown',
  props: {
    menu: Array,
    fieldName: String,
    width: String
  },
  data() {
    return {
      options: this.menu.map(x => x.toLowerCase()),
      selected: '',
      opened: false
    }
  },
  mounted() {
    this.selected = this.options[0]
    this.popupItem = this.$el
  },
  methods: {
    changeSelection(e) {
      this.selected = e.currentTarget.innerHTML
      this.$emit('update-form', this.fieldName, this.selected)
    },
    close() {
      this.opened = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

.dropdown {
  //width: 120px;
  text-transform: capitalize;
  font-family: 'Open Sans', arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0.25em 8px 1em;
  background-color: white;
  border-radius: 4px 4px 0 0;
  border-bottom: solid 2px $divider-color;
  cursor: pointer;
  transition: background-color 200ms $ease-in-out, border 200ms $ease-in-out;

  &:hover {
    background-color: #F5F5F5;
  }

  span {
    vertical-align: middle;
  }

  .material-icons {
    vertical-align: middle;
    float: right;
  }

  &.opened {
    background-color: #E4E4E4;
    border-bottom: solid 2px $primary-color;
  }

  &.opened .options {
    visibility: visible;
    top: calc(100% + 2px);
    opacity: 1;
    transition: top 200ms $ease-in-out, opacity 200ms $ease-in-out;
  }

  &.opened .material-icons {
    transform: rotate(180deg);
  }

  .options {
    list-style: none;
    text-indent: 0;
    padding: 8px 0;
    position: absolute;
    top: 85%;
    left: 0;
    width: 100%;
    box-shadow: $shadow-4dp;
    border-radius: 0 0 4px 4px;
    background-color: white;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s linear 200ms, top 0s linear 200ms, opacity 200ms $ease-in-out;
    
    li {
      padding: 0.75em 1em;
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
