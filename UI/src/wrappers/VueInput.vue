<template>
  <div class="vue-input">

    <TextInput v-if="input.type === 'text'" type="text"
      :name="input.name"
      :label="input.label"
      @input="emitInputEvent"></TextInput>

    <DropdownInput v-if="input.type === 'dropdown'"
      :name="input.name"
      :label="input.label"
      :options="input.options"
      @input="emitInputEvent"></DropdownInput>

  </div>
</template>


<script>
import DropdownInput from '@/components/inputs/DropdownInput.vue'
import TextInput from '@/components/inputs/TextInput.vue'

export default {
  name: 'Input',
  components: {
    DropdownInput,
    TextInput
  },
  props: {
    input: Object
  },
  methods: {
    emitInputEvent(value, fieldName) {
      this.$emit('input', value, fieldName)
    }
  }
}
</script>


<style lang="scss">
.vue-input {
  margin-bottom: 16px;
  width: 100%;
}
</style>
