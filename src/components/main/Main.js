import {$} from '@core/Dom';
import {ComponentPage} from '@core/ComponentPage';
import {ActiveRoute} from '@core/ActiveRoute';

export class Main extends ComponentPage {
  constructor(options) {
    super(options.components)
    this.components = options.components || []
    this.store = options.store
    this.processor = options.processor
  }
  getRoot() {
    debugger
    if (!this.store.getState().modules[ActiveRoute.param]) {
      return 'dashboard'
    }
    this.$root = $.create('div', 'main')
    const options = {
      store: this.store,
      processor: this.processor,
      moduleName: ActiveRoute.param
    }
    this.setRootTemplate(this.$root, options)
    return this.$root
  }
  initialize() {
    this.components.forEach(component => {
      component.init()
    })
    this.mainGame = this.components.find((c) => c.name === 'MainGame')
    this.keydownHandler = (e) => {
      this.mainGame.onKeydown(e)
    }
    document.addEventListener('keydown', this.keydownHandler)
  }
  destroy() {
    this.components.forEach(component => {
      component.destroy()
    })
    document.removeEventListener('keydown', this.keydownHandler)
  }
}
