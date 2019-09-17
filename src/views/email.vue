<template>
  <div class="email">
    <button @click='handleClick'> Click me </button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    console.log(this.$bus)
  }
}
</script>

<style>
  .email {
    border: 1px solid green;
  }
</style>

