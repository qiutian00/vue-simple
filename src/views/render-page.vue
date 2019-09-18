<template>
  <div>
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </li>
    </ul> -->

    <!-- <list :list="list" :render="renderFunc"></list> -->

    <!-- 作用域插槽 -->
    <list :list="list">
      <count-to slot-scope="count" :end-val="count.number"> </count-to>
    </list>
  </div>
</template>
<script>

import List from '_c/list'
// CountTo 用户jsx,中还是<CountTo>
import CountTo from '_c/count-to'
export default {
  // not used is oked
  name: 'render_page',
  data () {
    return {
      list: [
        { name: 'admin2' },
        { name: 'qiutian00' }
      ]
    }
  },
  components: {
    List,
    CountTo
  },
  methods: {
    handleClick (event) {
      console.log(event);
    },
    renderFunc (h, name) {
      // return h('i', {
      //   style: {
      //     color: 'pink'
      //   }
      // }, name)

      // or  必须是h, style 中为对象
      return (
        <i on-click={this.handleClick} style={{ color: 'pink' }}> { `${name}_jsx` } </i>
      )

      // 自定义组件： 原生click事件绑定和自定义事件绑定
      // return (
      //   <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'pink'}}></CountTo>
      // )
    },
    handleClick (event) {
      console.log('jsx click');
    }
  }
}
</script>
