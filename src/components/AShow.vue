<template>
    <div>
      AShow: {{ content }}
    </div>
</template>
<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
