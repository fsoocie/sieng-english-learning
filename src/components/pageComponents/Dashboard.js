import {ComponentPage} from '@core/ComponentPage';
import {$} from '@core/Dom';

export class Dashboard extends ComponentPage {
  constructor(options) {
    super(options.components, options.store)
  }
  getRoot() {
    this.$root = $.create('div', 'dashboard')
    this.setRootTemplate(this.$root)
    return this.$root
  }
}
