import {DomListener} from '@core/DomListener';

export class DictionaryComponent extends DomListener {
  constructor($root, options) {
    super($root, options);
    this.name = options.name
    this.store = options.store

    this.prepare()
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
  prepare() {}
  $dispatch(action) {
    this.store.dispatch(action)
  }
  $subscribe(fn) {
    this.store.subscribe(fn)
  }
  get $getState() {
    return this.store.getState()
  }
}
