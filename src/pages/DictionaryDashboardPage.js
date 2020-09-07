import {Page} from '@core/Page';
import {Dashboard} from '@/components/dashboard/Dashboard';
import {Header} from '@/components/header/Header';
import {ListModules} from '@/components/listModules/ListModules';

export class DictionaryDashboardPage extends Page {
  constructor(store, processor) {
    super()
    this.store = store
    this.processor = processor
  }
  getRoot() {
    this.dashboard = new Dashboard({
      components: [Header, ListModules], store: this.store
    })
    return this.dashboard.getRoot()
  }
  afterInit() {
    this.dashboard.initialize()
  }
  destroy() {
    this.dashboard.destroy()
  }
}
