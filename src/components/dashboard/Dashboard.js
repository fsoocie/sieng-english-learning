import {ComponentPage} from '@core/ComponentPage';
import {$} from '@core/Dom';

export class Dashboard extends ComponentPage {
  constructor(options) {
    super(options.components)
    this.store = options.store
  }
  getRoot() {
    this.$root = $.create('div', 'dashboard')
    const options = {
      store: this.store,
    }
    this.setRootTemplate(this.$root, options)
    return this.$root
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
