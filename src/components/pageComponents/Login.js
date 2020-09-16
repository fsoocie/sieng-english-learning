import {$} from '@core/Dom';
import {ComponentPage} from '@core/ComponentPage';

export class Login extends ComponentPage {
  constructor(options) {
    super(options.components, options.store)
    this.initProcessor = options.initProcessor
  }
  getRoot() {
    this.$root = $.create('div', 'login-page')
    const options = {initProcessor: this.initProcessor}
    this.setRootTemplate(this.$root, options)
    return this.$root
  }
}
