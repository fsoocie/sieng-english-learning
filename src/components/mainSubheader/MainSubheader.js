import {DictionaryComponent} from '@core/DictionaryComponent';
import {returnToModulesSVG} from '@/inlineSVG';
import {ActiveRoute} from '@core/ActiveRoute';
import {removeModule} from '@/redux/actionCreators';
import {userId} from '@/shared/FirebaseClient';

export class MainSubheader extends DictionaryComponent {
  static className = 'subheader'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'MainSubheader',
      listeners: ['click'],
      ...options
    });
    this.$root = $root
    this.moduleName = options.moduleName
    this.processor = options.processor
    this.name = this.$getState.modules[this.moduleName].name
  }
  toHTML() {
    return `
      <div class="subheader__title">
        <a href="/#dashboard">
          <div id="return-to-modules-SVG">${returnToModulesSVG}</div>
        </a>    
        <span>${this.name}</span>
      </div>
      <div class="subheader__delete" data-id="remove-module">
       <span data-id="remove-module">Удалить модуль</span>
      </div>
    `
  }
  onClick(event) {
    if (event.target.dataset.id === 'remove-module') {
      if (window.confirm(`Вы действительно хотите удалить "${this.name}"?`)) {
        this.processor.delete(`${userId()}/modules/${this.moduleName}`)
            .then(() => {
              this.$dispatch(removeModule(this.moduleName))
              ActiveRoute.navigate('dashboard')
            })
      }
    }
  }
}
