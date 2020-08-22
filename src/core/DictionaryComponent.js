import {DomListener} from '@core/DomListener';

export class DictionaryComponent extends DomListener {
  constructor($root, options) {
    super($root, options);
    this.name = options.name
  }
  init() {
    this.initDomListeners()
  }
  destroy() {
    this.removeDomListeners()
  }
  toHTML() {
    throw new Error(`"toHTML()" must be implemented in ${this.name}`)
  }
}
