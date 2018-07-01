<template>
  <div v-typed-style="{
    width: CSS.px(w),
    height: new CSSUnitValue(h, 'px'),
    // color: new CSSVariableReferenceValue('--main-color'),
    // backgroundColor: new CSSVariableReferenceValue('--second-color'),
    $mainColor: mainColor,
    $secondColor: secondColor
  }">Hello World</div>
</template>

<script>
/* eslint-disable */

export default {
  data () {
    return {
      w: 400,
      h: 300,
      mainColor: '#f0f0f0',
      secondColor: '#ff9900'
    }
  },
  methods: {
    CSSUnitValue,
    // CSSUnparsedValue,
    // CSSVariableReferenceValue
  }
}
</script>
