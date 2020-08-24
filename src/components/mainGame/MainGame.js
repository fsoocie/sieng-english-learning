import {DictionaryComponent} from '@core/DictionaryComponent'
import {Game} from '@/components/mainGame/Game';
import {$} from '@core/Dom';
import {
  isExistTypeGame, isCard,
  isNextCard, isPrevCard, isAnswerButton
} from '@/components/mainGame/game.functions';

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
    </div>
    `
  }

  init() {
    super.init()
    this.game = new Game('[data-id=game]', {
      state: [
        {russian: 'реализовать', english: 'implement'},
        {russian: 'уколоть', english: 'prick'},
        {russian: 'исполнитель', english: 'executor'}
      ]
    })
  }

  onClick(event) {
    if (isExistTypeGame(event)) {
      const typegame = $(event.target).data['typegame']
      this.game.changeGameType(typegame)
    }
    if (isCard(event)) {
      if (!this.game.animation) {
        this.game.translateCard()
      }
    }
    if (isNextCard(event)) {
      if (!this.game.animation) {
        this.game.nextCard()
      }
    }
    if (isPrevCard(event)) {
      if (!this.game.animation) {
        this.game.prevCard()
      }
    }
    if (isAnswerButton(event)) {
      this.game.sendAnswerWord()
    }
  }
}
