import {DictionaryComponent} from '@core/DictionaryComponent'
import {createCards} from '@/components/mainGame/createCards'
/* import {createLearningWords} from '@/components/mainGame/createLearningWords'
import {createResult} from '@/components/mainGame/createResult' */

export class MainGame extends DictionaryComponent {
  static className = 'content-game'
  static tag = 'main'
  constructor($root, options) {
    super($root, {
      name: 'MainGame',
      listeners: ['click'],
      ...options
    })
    this.$root = $root
  }

  toHTML() {
    return `
    <div class="themes-game">
      <div class="themes-game__block">
        <div class="themes-game__cards themes-game_active">
          <span class="themes-game__span">Карточки</span>
        </div>
        <div class="themes-game__learning ">
          <span class="themes-game__span">Учить слова</span>
        </div>
      </div>
    </div>
    <div class="game">
      ${createCards('implement')}
    </div>
    `
  }
}
