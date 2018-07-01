import typedStyleDir from '../directive/typed-style'

export default {
  install: Vue => {
    Vue.prototype.CSS = CSS
    Vue.directive('typed-style', typedStyleDir)
  }
}
