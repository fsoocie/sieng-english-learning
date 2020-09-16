import {Page} from '@core/Page';
import {LoginComponent} from '@/components/loginComponent/LoginComponent';
import {Login} from '@/components/pageComponents/Login';

export class LoginPage extends Page {
  constructor(store, processor, initProcessor) {
    super()
    this.store = store
    this.processor = processor
    this.initProcessor = initProcessor
  }
  getRoot() {
    this.page = new Login({
      components: [LoginComponent],
      store: this.store, initProcessor: this.initProcessor
    })
    return this.page.getRoot()
  }
}
