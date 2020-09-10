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
      listeners: ['click'],
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
      ${createBlanks(this.$getState.modules[this.moduleName])}
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
      const index = this.$blanks
          .find('.blank:last-child .blank__number').text()
      this.$blanks.insertHTML(
          'beforeend', createBlank(Number(index))
      )
      this.$blanks.find('.blank:last-child input').focus()
    }
  }
}
