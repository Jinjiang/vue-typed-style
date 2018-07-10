// usage:
// npm install -g @vue/cli-service-global @vue/cli
// vue serve

import Vue from 'vue'
import TypedStylePlugin from '../'
import FooComponent from './foo.vue'

// // https://drafts.css-houdini.org/css-properties-values-api/
// // not polyfilled yet
// CSS.registerProperty({
//   name: '--main-color',
//   syntax: '<color>',
//   initialValue: 'black',
//   inherits: false
// })
// CSS.registerProperty({
//   name: '--second-color',
//   syntax: '<color>',
//   initialValue: 'white',
//   inherits: false
// })

Vue.use(TypedStylePlugin)

new Vue({
  render: h => h(FooComponent)
}).$mount('#app')
