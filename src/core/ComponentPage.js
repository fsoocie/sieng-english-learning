import {$} from '@core/Dom';

export class ComponentPage {
  constructor(components) {
    this.components = components
  }
  setRootTemplate($root, options) {
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
}