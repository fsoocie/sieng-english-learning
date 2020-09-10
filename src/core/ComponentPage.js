import {$} from '@core/Dom';

export class ComponentPage {
  constructor(components, store) {
    this.components = components
    this.store = store
  }
  setRootTemplate($root, options = {}) {
    options = {
      store: this.store,
      ...options
    }
    this.components = this.components.map(Component => {
      const tag = Component.tag || 'div'
      const className = Component.className || ''
      const $el = $.create(tag, className)
      const component = new Component($el, options)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
  }
  initialize() {
    this.components.forEach(component => {
      component.init()
    })
  }
  destroy() {
    this.components.forEach(component => {
      component.destroy()
    })
  }
}
