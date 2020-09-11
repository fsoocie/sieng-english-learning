import {StateProcessor} from '@core/StateProcessor';
import {FirebaseClient} from '@/shared/FirebaseClient';
import createStore from '@/redux/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {toInitialState} from '@/redux/initialState';
import {$} from '@core/Dom';
import {ActiveRoute} from '@core/ActiveRoute';
import {definePage} from '@core/utils';

export class Router {
  constructor(selector, routes) {
    this.$placeholder = $(selector)
    this.routes = routes
    this.store = {}
    this.page = null
    this.init()
  }
  init() {
    this.processor = new StateProcessor(new FirebaseClient())
    this.processor.get().then(state => {
      state = JSON.parse(JSON.stringify(state))
      this.store = createStore(rootReducer, toInitialState(state))
      this.processor.post(this.store.getState())
      window.addEventListener('hashchange', this.changePageHandler.bind(this))
      this.changePageHandler()
    })
  }

  changePageHandler() {
    if (this.page && typeof this.$rootPage === 'object') {
      this.page.destroy()
    }
    const Page = definePage(ActiveRoute, this.routes)
    this.page = new Page(this.store, this.processor)
    this.$rootPage = this.page.getRoot()
    if (typeof this.$rootPage === 'string') {
      ActiveRoute.navigate(this.$rootPage)
    } else {
      this.$placeholder.clear().append(this.$rootPage)
      this.page.afterInit()
    }
  }
}
