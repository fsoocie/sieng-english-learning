import {ComponentPage} from '@core/ComponentPage';
import {$} from '@core/Dom';
import {userId} from '@/shared/FirebaseClient';

export class Dashboard extends ComponentPage {
  constructor(options) {
    super(options.components, options.store)
  }
  getRoot() {
    if (!userId()) {
      return 'login'
    }
    this.$root = $.create('div', 'dashboard')
    this.setRootTemplate(this.$root)
    return this.$root
  }
}
