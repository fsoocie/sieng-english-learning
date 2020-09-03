import {createTerms} from '@/components/terms/terms.template';
import {DictionaryStateComponent} from '@core/DictionaryStateComponent';

export class Terms extends DictionaryStateComponent {
  static className = 'terms'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Terms',
      ...options
    });
    this.store = options.store
    this.moduleName = options.moduleName
  }
  prepare() {
    this.initState(this.$getState)
    this.$subscribe(state => {
      this.setState(state)
    })
  }

  get template() {
    return createTerms(this.state.modules[this.moduleName])
  }

  toHTML() {
    return this.template
  }
}
