import {DictionaryComponent} from '@core/DictionaryComponent';
import auth from '@/shared/FirebaseClient'
import {exitAccountSVG} from '@/assets/inlineSVG';

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
    this.store = options.store
  }
  toHTML() {
    return `
    <div class="header__container">
      <div class="header__title">
        <span>SIENG</span>
      </div>
      <div class="header__user">
        <div class="header__user-container">
          <span class="header__acc-name">${this.$getState.username}</span>
          <div 
          data-id="signout"
          id="exit-account-SVG">${exitAccountSVG}</div>
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
