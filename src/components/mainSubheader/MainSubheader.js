import {DictionaryComponent} from '@core/DictionaryComponent';
import {returnToModulesSVG} from '@/inlineSVG';

export class MainSubheader extends DictionaryComponent {
  static className = 'subheader'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'MainSubheader',
      listeners: [],
      ...options
    });
    this.$root = $root
  }
  toHTML() {
    return `
      <div class="subheader__title">
        <div id="return-to-modules-SVG">${returnToModulesSVG}</div>
        <span>Программирование</span>
      </div>
      <div class="subheader__delete">
       <span>Удалить модуль</span>
      </div>
    `
  }
}
