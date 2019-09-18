<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <span slot="left">总数：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取值</button>
    <button @click="up">更新值</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  data () {
    return {
      endVal: 87228599.025
    }
  },
  components: {
    CountTo
  },
  methods: {
    getNumber () {
      // 父组件调用子组件方法
      this.$refs.countTo.getCount()
    },
    up () {
      this.endVal += Math.random() * 100
    },
    handleEnd (val) {
      console.log('end val:'+ val);
    }
  }
}
</script>
