<template>
  <div>
    <!-- <a-input v-model='inputValue' /> -->
    <a-input :value='inputValue' @input='handleInput' />
    <p>{{ inputValue }} -> lasteLettle is {{ inputValueLastLetter }}</p>
    <!-- <p>{{ inputValue }}</p> -->
    <!-- <a-show :content='inputValue' /> -->
    <p>appName:{{ appName }},appWithVersion: {{ appWithVersion }}</p>
    <!-- <p>userName:{{ userName }}, firstLetter: {{ firstLetter }}</p> -->
    <button @click='handleChangeAppName'>修改appName</button>
    <p><span>{{ appVersion }}</span> <span>{{ userName }}</span></p>
    <button @click='handleChangeUserName'>修改userName</button>
  </div>
</template>
<script>

import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

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
      // appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
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

    appName () {
      return this.$store.state.appName
    },
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
    ...mapMutations([
      'SET_APP_VERSION',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (value) {
      this.inputValue = value
    },
    handleChangeAppName () {
      // the error not has set method
      // this.appName = 'new appName'

      // this.$store.commit('SET_APP_NAME', {
      //   appName: newAppName
      // })

      // 或者

      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName2'
      // })
      // this.$store.commit('SET_APP_VERSION', 'v2.2.2.0')

      // 使用mutations
      this.SET_APP_VERSION('v2.2.99.0')
      this.SET_USER_NAME('李叶子')

    },
    handleChangeUserName () {
      // this.updateAppName('other param')
      // or the same effect
      this.$store.dispatch('updateAppName', 'actual param')
    }
  }
}
</script>
