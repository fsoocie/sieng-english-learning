import {StateProcessor} from '@core/StateProcessor';
import {FirebaseClient} from '@/shared/FirebaseClient';
import createStore from '@/redux/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {toInitialState} from '@/redux/initialState';
import {$} from '@core/Dom';
import {ActiveRoute} from '@core/ActiveRoute';
import {definePage} from '@core/utils';
import {Loader} from '@/components/Loader';

export class Router {
  constructor(selector, routes) {
    this.$placeholder = $(selector)
    this.routes = routes
    this.store = {}
    this.loader = new Loader()
    this.page = null
    this.init()
  }
  async init() {
    this.$placeholder.append(this.loader)
    window.addEventListener('hashchange', this.changePageHandler.bind(this))
  }
  async initProcessor() {
    this.processor = new StateProcessor(new FirebaseClient())
    let state = await this.processor.get()
    state = JSON.parse(JSON.stringify(state))
    this.store = createStore(rootReducer, toInitialState(state))
  }
  changePageHandler() {
    if (this.page && typeof this.$rootPage === 'object') {
      this.page.destroy()
    }
    const Page = definePage(ActiveRoute, this.routes)
    this.page = new Page(this.store,
        this.processor, this.initProcessor.bind(this))
    this.$rootPage = this.page.getRoot()
    if (typeof this.$rootPage === 'string') {
      ActiveRoute.navigate(this.$rootPage)
    } else {
      this.$placeholder.clear().append(this.$rootPage)
      this.page.afterInit()
    }
  }
}
