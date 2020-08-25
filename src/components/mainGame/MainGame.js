import {DictionaryComponent} from '@core/DictionaryComponent'
import {Game} from '@/components/mainGame/Game';
import {$} from '@core/Dom';
import {
  isExistTypeGame, isCard,
  isNextCard, isPrevCard, isAnswerButton,
  isNoActiveTypeGame, isSkipButton
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
    if (isExistTypeGame(event) && isNoActiveTypeGame(event)) {
      const typegame = $(event.target).data['typegame']
      this.game.changeGameType(typegame)
    }
    if (isCard(event)) {
      this.game.translateCard()
    }
    if (isNextCard(event)) {
      this.game.nextCard()
    }
    if (isPrevCard(event)) {
      this.game.prevCard()
    }
    if (isAnswerButton(event)) {
      this.game.sendAnswerWord()
    }
    if (isSkipButton(event)) {
      this.game.skipWord()
    }
  }

  onKeydown(event) {
    const key = event.key.toLowerCase()
    const $card = this.game.$card.$el
    const $skip = this.game.$skip.$el
    if (key === 'enter' && event.target.dataset.id === 'answer-input') {
      this.game.sendAnswerWord()
    } else if (key === 'shift' && $skip) {
      this.game.skipWord()
    } else if (key === 'enter' && $card) {
      this.game.translateCard()
    } else if ((key === 'arrowleft' || key ==='a') && $card) {
      this.game.prevCard()
    } else if ((key === 'arrowright'|| key ==='d') && $card) {
      this.game.nextCard()
    }
  }
}
