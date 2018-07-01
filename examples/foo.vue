<template>
  <div v-typed-style="{
    width: CSS.px(w),
    height: CSS.px(h),
    // todo: crashed in Chrome
    // color: 'var(--mainColor)',
    // backgroundColor: 'var(--secondColor)',
    // todo: name in upper case is not supported in Safari
    $mainColor: mainColor,
    $secondColor: secondColor
  }">Hello World</div>
</template>

<script>
export default {
  data () {
    return {
      w: 400,
      h: 300,
      mainColor: '#f0f0f0',
      secondColor: '#ff9900'
    }
  }
}
</script>
