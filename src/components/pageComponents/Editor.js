import {ComponentPage} from '@core/ComponentPage';
import {ActiveRoute} from '@core/ActiveRoute';
import {$} from '@core/Dom';

export class Editor extends ComponentPage {
  constructor(options) {
    super(options.components, options.store);
  }
  getRoot() {
    const options = {
      moduleName: ActiveRoute.param
    }
    this.$root = $.create('div', '')
    this.setRootTemplate(this.$root, options)
    return this.$root
  }
}
