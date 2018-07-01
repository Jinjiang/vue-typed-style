function resolvePropName (name) {
  if (name.match(/^--/)) {
    // CSS custom property
    return name
  } else if (name.match(/^\$/)) {
    // prefix $ for CSS custom property
    return name.replace(/^\$/, '--').replace(/([A-Z])/g, (_, char) => '-' + char.toLowerCase())
  } else {
    // convert camelCase into kebab-case
    return name.replace(/([A-Z])/g, (_, char) => '-' + char.toLowerCase())
  }
}

export default {

  // called only once, when the directive is first bound to the element.
  bind (el, { value }) {
    if (typeof value === 'object') {
      for (const propName in value) {
        const propValue = value[propName]
        el.attributeStyleMap.set(resolvePropName(propName), propValue)
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
        el.attributeStyleMap.set(resolvePropName(propName), propValue)
      }
    }
  },

  // // called after the containing component’s VNode
  // // and the VNodes of its children have updated.
  // componentUpdated (el, binding, vnode) {},

  // // called only once, when the directive is unbound from the element.
  // unbind (el, binding, vnode) {}
}
