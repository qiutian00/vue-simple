<template>
  <div>
    <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // not used is oked
  name: 'render_page',
  data () {
    return {
      list: [
        { name: 'admin' },
        { name: 'qiutian00' }
      ]
    }
  },
  methods: {
    handleClick (event) {
      console.log(event);
    }
  }
}
</script>
