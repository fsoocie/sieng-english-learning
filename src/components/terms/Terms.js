import {DictionaryComponent} from '@core/DictionaryComponent';

export class Terms extends DictionaryComponent {
  static className = 'terms'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Terms',
      ...options
    });
  }

  toHTML() {
    return `
    <div class="terms__header">
      <span>Термины в модуле (4)</span>
    </div>
    <div class="terms__content">
      <div class="term">
        <div class="term__english-word">
          <span>compare</span>
        </div>
        <div class="term__russian-word">
          <span>сопоставить</span>
        </div>
      </div>
      <div class="term">
        <div class="term__english-word">
          <span>split</span>
        </div>
        <div class="term__russian-word">
          <span>разделить</span>
        </div>
      </div>
      <div class="term">
        <div class="term__english-word">
          <span>implementation</span>
        </div>
        <div class="term__russian-word">
          <span>реализация</span>
        </div>
      </div>
    </div>
    <button class="edit">Добавить или удалить термины</button>
    `
  }
}
