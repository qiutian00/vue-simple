<template>
  <div>
    <!-- <a-input v-model='inputValue' /> -->
    <a-input :value='inputValue' @input='handleInput' />
    <p>{{ inputValue }}</p>
    <a-show :content='inputValue' />
  </div>
</template>
<script>

import AInput from '_c/AInput'
import AShow from '_c/AShow'
export default {
  name: 'store',
  data() {
    return {
      inputValue: 'qiutian00'
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput (value) {
      this.inputValue = value
    }
  }
}
</script>
