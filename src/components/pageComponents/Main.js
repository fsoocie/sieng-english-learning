import {$} from '@core/Dom';
import {ComponentPage} from '@core/ComponentPage';
import {ActiveRoute} from '@core/ActiveRoute';
import {userId} from '@/shared/FirebaseClient';

export class Main extends ComponentPage {
  constructor(options) {
    super(options.components, options.store)
    this.components = options.components || []
    this.processor = options.processor
  }
  getRoot() {
    if (!userId()) {
      return 'login'
    }
    if (!this.store.getState().modules[ActiveRoute.param]) {
      return 'dashboard'
    }
    this.$root = $.create('div', 'main')
    const options = {
      processor: this.processor,
      moduleName: ActiveRoute.param
    }
    this.setRootTemplate(this.$root, options)
    return this.$root
  }
  initialize() {
    super.initialize()
    this.mainGame = this.components.find((c) => c.name === 'MainGame')
    this.keydownHandler = (e) => {
      this.mainGame.onKeydown(e)
    }
    document.addEventListener('keydown', this.keydownHandler)
  }
  destroy() {
    super.destroy()
    document.removeEventListener('keydown', this.keydownHandler)
  }
}
