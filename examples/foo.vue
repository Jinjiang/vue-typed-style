<template>
  <div v-typed-style="{
    width: CSS.px(w),
    height: CSS.px(h),
    'background-color': bg
  }"></div>
</template>

<script>
export default {
  data () {
    return {
      w: 400,
      h: 300,
      bg: '#ff9900'
    }
  }
}
</script>
