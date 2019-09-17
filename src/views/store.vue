<template>
  <div>
    <!-- <a-input v-model='inputValue' /> -->
    <a-input :value='inputValue' @input='handleInput' />
    <p>{{ inputValue }} -> lasteLettle is {{ inputValueLastLetter }}</p>
    <!-- <p>{{ inputValue }}</p> -->
    <!-- <a-show :content='inputValue' /> -->
    <p>appName:{{ appName }},appWithVersion: {{ appWithVersion }}</p>
    <p>userName:{{ userName }}, firstLetter: {{ firstLetter }}</p>
  </div>
</template>
<script>

import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

// import { createNamespacedHelpers } from 'vuex';
// const { mapGetters } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data() {
    return {
      inputValue: 'qiutian00'
    }
  },
  computed: {
    // ...mapState([
    //   'appName'
    // ]),
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    // 还可以添加模块名称
    ...mapGetters([
      'appWithVersion',
      'firstLetter'
    ]),
    // 缺点，无法全局使用
    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // },

    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 2)
    },
    // appWithVersion () {
    //   return this.$store.getters.appWithVersion
    // }
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
