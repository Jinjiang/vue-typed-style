import polyfill from 'css-typed-om'
import typedStyleDir from '../directive/typed-style'

polyfill(window)

export function install (Vue) {
  Vue.prototype.CSS = CSS
  Vue.directive('typed-style', typedStyleDir)
}
