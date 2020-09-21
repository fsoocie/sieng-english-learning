import {ComponentPage} from '@core/ComponentPage';
import {ActiveRoute} from '@core/Router/ActiveRoute';
import {$} from '@core/Dom';
import {userId} from '@/shared/FirebaseClient';

export class Editor extends ComponentPage {
  constructor(options) {
    super(options.components, options.store);
    this.processor = options.processor
  }
  getRoot() {
    if (!userId()) {
      return 'login'
    }
    const options = {
      moduleName: ActiveRoute.param,
      processor: this.processor
    }
    this.$root = $.create('div', '')
    this.setRootTemplate(this.$root, options)
    return this.$root
  }
}
