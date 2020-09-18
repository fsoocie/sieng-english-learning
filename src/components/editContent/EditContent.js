import {addWordSVG} from '@/inlineSVG';
import {
  createBlank, createBlanks
} from '@/components/editContent/editContent.template';
import {DictionaryStateComponent} from '@core/DictionaryStateComponent';
import {
  isDeleteWord, isAddWord
} from '@/components/editContent/editContent.functions';
import {$} from '@core/Dom'

export class EditContent extends DictionaryStateComponent {
  static className = 'dictionary-editor-container'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'EditContent',
      listeners: ['click', 'keyup'],
      ...options
    })
    this.store = options.store
    this.moduleName = options.moduleName
  }
  prepare() {
    this.initState(this.$getState)
    this.unsub = this.$subscribe(state => {
      this.setState(state)
    })
  }
  init() {
    super.init();
    this.$blanks = $('.blanks')
  }

  destroy() {
    super.destroy()
    this.unsub()
  }
  get template() {
    return `
    <main class="editor">
      <div class="add-word">
        <div data-id="add-word" class="add-word__button">
          <div id="add-word-SVG" data-id="add-word">${addWordSVG}</div>
          <span data-id="add-word">Добавить слово</span>
        </div>
      </div>
      ${this.$getState.modules
      ? createBlanks(this.$getState.modules[this.moduleName])
      : createBlanks({})}
    </main>
    `
  }
  toHTML() {
    return this.template
  }
  onClick(event) {
    if (isDeleteWord(event)) {
      const $blank = $(event.target.closest('.blank'))
      $blank.animate('delete-blank', 1000)
      setTimeout(() => $blank.remove(), 980)
    }
    if (isAddWord(event)) {
      const $blank = this.$blanks.find('.blank:last-child .blank__number')
      const index = $blank.$el? $blank.text(): 0
      this.$blanks.insertHTML(
          'beforeend', createBlank(Number(index))
      )
      this.$blanks.find('.blank:last-child input').focus()
    }
  }
  onKeyup(event) {
    const id = event.target.dataset.id
    if (event.key === 'Enter' && (id === 'input_ru' || id === 'input_en')) {
      const input = event.target
          .closest('[data-id=blank]')
          .querySelector(id === 'input_ru'
            ? '[data-id=input_en]'
            : '[data-id=input_ru]')
      input.focus()
      input.setSelectionRange(input.value.length, input.value.length - 1)
    }
  }
}
