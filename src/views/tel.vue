<template>
  <div class="tel">
    tel: {{ message }}
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', (mes) => {
      this.message = mes
    })
  },
  // mounted () {
  //   this.$on('on-click', (mes) => {
  //     console.log(mes)
  //   })
  // }
}
</script>

<style>
  .tel {
    border: 1px solid red;
  }
</style>

