<template>
  <ul>
    <li @mousemove="handleMove" v-for="(item, index) in list" :key="index">
      <!-- <span v-if="!render">{{ item.name }}</span>
      <render-dom v-else :render-func="render" :name="item.name"></render-dom> -->

      <!-- 作用域插槽 -->
      <slot :number="85885"></slot>
    </li>
  </ul>
</template>
<script>

import RenderDom from '_c/render-dom';
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleMove (event) {
      // 阻止鼠标移动选中
      event.preventDefault()
    }
  }
}
</script>
