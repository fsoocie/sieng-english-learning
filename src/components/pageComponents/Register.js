import {$} from '@core/Dom';
import {ComponentPage} from '@core/ComponentPage';
import {userId} from '@/shared/FirebaseClient';

export class Register extends ComponentPage {
  constructor(options) {
    super(options.components, options.store)
    this.processor = options.processor
  }
  getRoot() {
    if (userId()) {
      return 'dashboard'
    }
    this.$root = $.create('div', 'register-page')
    const options = {
      processor: this.processor
    }
    this.setRootTemplate(this.$root, options)
    return this.$root
  }
}
