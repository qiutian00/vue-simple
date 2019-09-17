<template>
  <input @input="handleInput" :value="value">
</template>
<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      // 直接修改value， 子组件修改父组件的值，通过以下事件的方式， 改值在子组件中
      this.$emit('input', value)
    }
  }
}
</script>
