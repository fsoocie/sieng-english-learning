import {DictionaryComponent} from '@core/DictionaryComponent';

export class EditSubheader extends DictionaryComponent {
  static className = 'edit-header'
  static tag = 'section'
  constructor($root, options) {
    super($root, {
      name: 'EditSubheader',
      listeners: [],
      ...options
    })
    this.$root = $root
    this.store = options.store
  }
  toHTML() {
    return `
        <div class="edit-header__container">
          <div class="edit-header__return">
            <a class="edit-header__return-link" href="/#">
              <button class="edit-header__return-button">
                <span id="back-SVG"></span>
                <span>Назад</span>
              </button>
            </a>
          </div>
          <div class="edit-header__done">
            <a href="#">
              <button class="edit-header__done-button">Готово</button>
            </a>
          </div>
        </div>
    `
  }
}
