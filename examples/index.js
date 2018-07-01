// usage:
// npm install -g @vue/cli-service-global @vue/cli
// vue serve

import Vue from 'vue'
import TypedStylePlugin from '../'
import FooComponent from './foo.vue'

Vue.use(TypedStylePlugin)

new Vue({
  render: h => h(FooComponent)
}).$mount("#app")
