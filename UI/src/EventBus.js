import Vue from 'vue'
const bus = new Vue()

// Event hierarchy

bus.$on('closeDrawersCmd', () => {
  bus.$emit('rightDrawerOpenedEvent', false)
  bus.$emit('leftDrawerOpenedEvent', false)
})

export default bus