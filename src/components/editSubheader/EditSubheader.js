import {DictionaryComponent} from '@core/DictionaryComponent';
import {ActiveRoute} from '@core/ActiveRoute';
import {updateModule, addModule} from '@/redux/actionCreators';

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
    this.moduleName = options.moduleName
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
        if (english && russian) {
          words.push({english, russian, progress})
        }
      })
      const changes = {words: words.length? words: {}, name}
      if (this.$getState.modules[this.moduleName]) {
        this.processor.update(changes, `modules/${this.moduleName}`)
        this.$dispatch(updateModule(this.moduleName, changes))
      } else {
        const moduleState = {
          ...changes, date: new Date().toString(),
          id: this.moduleName
        }
        this.processor.post(moduleState, `/modules/${this.moduleName}`)
        this.$dispatch(addModule(this.moduleName, moduleState))
      }
      ActiveRoute.navigate(`main/${this.moduleName}`)
    }
  }
}
