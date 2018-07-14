<template>
  <span class="tag">
    <router-link to="" class="name">{{ name }}</router-link>
    <router-link to="" class="remove"><i class="material-icons">close</i></router-link>
  </span>
</template>


<script>
export default {
  name: 'Tag',
  props: {
    name: String
  }
}
</script>


<style lang="scss">
.tag {
  display: inline-block;
  font-size: 14px;
  border: solid 4px black;
  border-radius: 24px;
  color: white;
  background-color: black;
  width: auto;
  overflow: hidden;

  &:hover {
    color: black;
    background-color: white;
  }

  > *, > * > * {
    display: inline-block;
    vertical-align: text-bottom;
  }

  .name {
    text-transform: lowercase;
    padding: 4px 0 4px 12px;
  }

  .remove {
    margin-left: 4px;
    padding: 4px 8px 4px 0;

    .material-icons {
      color: inherit;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
