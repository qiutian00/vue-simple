<template>
  <div>
    <slot name="left" /><span ref="number" :class="countClass" :id="eleId"></span><slot name="right" />
  </div>
</template>

<script>
import CountUp from 'countup'
import { setTimeout } from 'timers'

// import './count-to.less'
export default {
  name: 'CountTo',
  data () {
    return {
      counter: {}
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    // 单位为秒
    duration: {
      type: Number,
      // default 可以从function 获取到
      default: 1
    },
    // 是否使用变速效果
    useEaseing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    // 毫秒
    delay: {
      type: Number,
      default: 0
    },
    calssName: {
      type: String,
      default: ''
    }
  },
  // 计算属性
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.calssName
      ]
    }
  },
  mounted () {
    // nextTick页面加载之后
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEaseing: this.useEaseing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimals
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.counter.delay)
    })
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          let getVal = this.getCount()
          console.log('getVal:' + getVal)
          this.$emit('on-animation-end', getVal)
        })
      }, this.duration * 1000 + 5)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  }
}
</script>

// import need .less
<style lang="less">
  @import './count-to.less';
</style>

