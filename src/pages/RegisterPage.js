import {Page} from '@core/Page';
import {Register} from '@/components/pageComponents/Register';
import {
  RegisterComponent
} from '@/components/registerComponent/RegisterComponent';

export class RegisterPage extends Page {
  constructor(store, processor) {
    super()
    this.store = store
    this.processor = processor
  }
  getRoot() {
    this.page = new Register({
      components: [RegisterComponent], store: this.store
    })
    return this.page.getRoot()
  }
}
