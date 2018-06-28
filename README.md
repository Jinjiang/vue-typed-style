# vue-typed-style

Supporting CSS Typed OM in Vue.js

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
