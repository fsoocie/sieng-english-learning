import {DictionaryComponent} from '@core/DictionaryComponent';

export class DictionaryStateComponent extends DictionaryComponent {
  constructor(...args) {
    super(...args);
  }
  get template() {
    throw new Error('must be implemented template method')
  }
  initState(initialState = {}) {
    this.state = {...initialState}
  }
  setState(newState) {
    this.state = {...newState}
    this.$root.html(this.template)
  }
}
