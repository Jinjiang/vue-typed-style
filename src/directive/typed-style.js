export default {

  // called only once, when the directive is first bound to the element.
  bind (el, { value }) {
    if (typeof value === 'object') {
      for (const propName in value) {
        const propValue = value[propName]
        el.attributeStyleMap.set(propName, propValue)
        currentStyle[propName] = propValue
      }
    }
  },

  // // called when the bound element has been inserted into its parent node.
  // inserted (el, binding, vnode) {},

  // called after the containing component’s VNode has updated,
  // but possibly before its children have updated.
  update (el, { value }) {
    if (typeof value === 'object') {
      for (const propName in value) {
        const propValue = value[propName]
        el.attributeStyleMap.set(propName, propValue)
        currentStyle[propName] = propValue
      }
    }
  },

  // // called after the containing component’s VNode
  // // and the VNodes of its children have updated.
  // componentUpdated (el, binding, vnode) {},

  // // called only once, when the directive is unbound from the element.
  // unbind (el, binding, vnode) {}

}
