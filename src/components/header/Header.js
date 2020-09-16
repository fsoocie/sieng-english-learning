import {DictionaryComponent} from '@core/DictionaryComponent';
import auth from '@/shared/FirebaseClient'
import {
  accountOptionsSVG, booksSVG,
  dictionaryBookSVG, filmsSVG
} from '@/inlineSVG';

export class Header extends DictionaryComponent {
  static tag = 'header'
  static className = 'header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['click'],
      ...options
    })
    this.$root = $root
  }
  toHTML() {
    return `
    <div class="header__container">
      <div class="header__title">
        <span>SIENG</span>
      </div>
      <nav class="sections">
        <div class="sections__dictionary sections__item sections__item_active">
          <div class="item__container">
            <div class="item__content">
              <div id="dictionary-book-SVG" class="item-svg">
                ${dictionaryBookSVG}
              </div>
              <span class="item__name">Словарь</span>
            </div>
          </div>
        </div>
        <div class="sections__films sections__item">
          <div class="item__container">
            <div class="item__content">
              <div id="films-SVG" class="item-svg">${filmsSVG}</div>
              <span class="item__name">Фильмы и сериалы</span>
            </div>
          </div>
        </div>
        <div class="header__books sections__item">
          <div class="item__container">
            <div class="item__content">
              <div id="books-SVG" class="item-svg">${booksSVG}</div>
              <span class="item__name">Книги</span>
            </div>
          </div>
        </div>
      </nav>
      <div class="header__user">
        <div class="header__user-container">
          <span class="header__acc-name">fsoocie</span>
          <div 
          data-id="signout"
          id="account-options-SVG">${accountOptionsSVG}</div>
        </div>
      </div>
    </div>`
  }
  onClick(e) {
    if (e.target.dataset.id === 'signout') {
      auth.signOut()
    }
  }
}
