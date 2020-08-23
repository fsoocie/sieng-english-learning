import {DictionaryComponent} from '@core/DictionaryComponent'
import {createCards} from '@/components/mainGame/game.template'
import {$} from '@core/Dom';
import {changeGame} from '@/components/mainGame/changeGame';
import {isExistTypeGame} from '@/components/mainGame/game.functions';

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
        <div class="themes-game__cards themes-game_active"
         data-typegame="cards">
          <span class="themes-game__span"
           data-typegame="cards">Карточки</span>
        </div>
        <div class="themes-game__learning" data-typegame="learning">
          <span class="themes-game__span"
          data-typegame="learning">Учить слова</span>
        </div>
      </div>
    </div>
    <div class="game" data-id="game">
      ${createCards('implement')}
    </div>
    `
  }

  onClick(event) {
    if (isExistTypeGame(event)) {
      const typegame = $(event.target).data['typegame']
      changeGame(typegame)
    }
  }
}
