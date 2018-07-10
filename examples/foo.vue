<template>
  <div v-typed-style="{

    width: CSS.px(w),
    height: new CSSUnitValue(h, 'px'),

    $mainColor: mainColor,
    $secondColor: secondColor,

    // CSSUnparsedValue & CSSVariableReferenceValue not polyfilled yet
    color: 'var(--main-color)',
    backgroundColor: 'var(--second-color)'

  }">Hello World</div>
</template>

<script>
export default {
  data () {
    return {
      w: 400,
      h: 300,
      mainColor: '#f0f0f0',
      secondColor: '#f90'
    }
  },
  methods: {
    // CSSUnparsedValue,
    // CSSVariableReferenceValue,
    // eslint-disable-next-line
    CSSUnitValue
  }
}
</script>
