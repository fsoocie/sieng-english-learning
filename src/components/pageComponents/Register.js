import {$} from '@core/Dom';
import {ComponentPage} from '@core/ComponentPage';

export class Register extends ComponentPage {
  constructor(options) {
    super(options.components, options.store)
  }
  getRoot() {
    this.$root = $.create('div', 'register-page')
    this.setRootTemplate(this.$root)
    return this.$root
  }
}
