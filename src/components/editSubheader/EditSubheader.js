import {DictionaryComponent} from '@core/DictionaryComponent';
import {ActiveRoute} from '@core/ActiveRoute';

export class EditSubheader extends DictionaryComponent {
  static className = 'edit-header'
  static tag = 'section'
  constructor($root, options) {
    super($root, {
      name: 'EditSubheader',
      listeners: ['click'],
      ...options
    })
    this.$root = $root
    this.store = options.store
    this.processor = options.processor
  }
  toHTML() {
    return `
        <div class="edit-header__container">
          <div class="edit-header__return">
            <a class="edit-header__return-link"
             href="/#main/${ActiveRoute.param}">
              <button class="edit-header__return-button">
                <span id="back-SVG"></span>
                <span>Назад</span>
              </button>
            </a>
          </div>
          <div class="edit-header__done">
            <button data-id="done"
            class="edit-header__done-button">Готово</button>
          </div>
        </div>
    `
  }
  onClick(event) {
    if (event.target.dataset.id === 'done') {
      const name = document.querySelector('[data-id=title_input]').value
      const words = []
      const blanks = document.querySelectorAll('[data-id=blank]')
      blanks.forEach($blank => {
        const english = $blank.querySelector('[data-id=input_en]').value
        const russian = $blank.querySelector('[data-id=input_ru]').value
        const progress = $blank.dataset.progress
        words.push({english, russian, progress})
      })
      const changes = {words, name}
      this.processor.update(changes, `modules/${ActiveRoute.param}`)
      ActiveRoute.navigate(`main/${ActiveRoute.param}`)
    }
  }
}
