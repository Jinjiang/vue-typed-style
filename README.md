# vue-typed-style

Supporting [CSS Typed OM](https://www.w3.org/TR/css-typed-om-1/) in [Vue.js](https://vuejs.org/).

before:

``` vue
<template>
  <foo :style="{ width: w + 'px' }" />
</template>
```

now:

``` vue
<template>
  <foo :typedStyle="{ width: CSS.px(w) }" />
</template>
```

And you can also use it in other ways:

``` vue
<template>
  <foo :typedStyle="{
    // CSS Typed OM constructor
    top: new CSSUnitValue(foo, 'px'),
    // CSS Typed OM factory function
    left: CSS.px(foo),
    // traditional CSS syntax
    right: `${foo}px`,
    // with more options
    bottom: {
      // value
      value: new CSSUnitValue(foo, unit),
      // just update the value once at the beginning, not reactive after that
      once: true,
      // fallback value if the value parsing failed 
      fallback: 0
    }
  }" />
</template>
```
