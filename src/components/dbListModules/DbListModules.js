import {DictionaryComponent} from '@core/DictionaryComponent';
import {
  createModuleList
} from '@/components/dbListModules/dbListModules.template';

export class DbListModules extends DictionaryComponent {
  static tag = 'main'
  static className = 'section-modules'
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
    ${this.$getState.modules && Object.keys(this.$getState.modules).length
      ? createModuleList(this.$getState)
      : '<h2 class="empty-h2">Создайте новый модуль</h2>'}
    <a href="/#editor/${Date.now()}" class="create-module">
      <div class="create-module__plus">+</div>
      <div class="create-module__text">Создать новый</div>
    </a>
    <div></div>
    `
  }
}
