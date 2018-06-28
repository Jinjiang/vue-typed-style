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
