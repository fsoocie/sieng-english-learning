import {Page} from '@core/Page';
import {Dashboard} from '@/components/pageComponents/Dashboard';
import {Header} from '@/components/header/Header';
import {DbListModules} from '@/components/dbListModules/DbListModules';

export class DictionaryDashboardPage extends Page {
  constructor(store, processor) {
    super()
    this.store = store
    this.processor = processor
  }
  getRoot() {
    this.page = new Dashboard({
      components: [Header, DbListModules], store: this.store
    })
    return this.page.getRoot()
  }
}
