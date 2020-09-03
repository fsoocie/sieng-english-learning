import {DictionaryComponent} from '@core/DictionaryComponent'
import {Game} from '@/components/mainGame/Game/Game';
import {$} from '@core/Dom';
import {
  isExistTypeGame,
  isCard,
  isNextCard,
  isPrevCard,
  isAnswerButton,
  isNoActiveTypeGame,
  isSkipButton,
  isStartAgain,
  gameTypes
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
    this.store = options.store
    this.moduleName = options.moduleName
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
      store: this.store,
      moduleName: this.moduleName,
      gameTypes
    })
  }

  onClick(e) {
    if (isExistTypeGame(e) && isNoActiveTypeGame(e)) {
      const typegame = $(e.target).data['typegame']
      this.game.changeGameType(typegame)
    }
    if (isCard(e)) {
      this.game.cards.translateCard()
    }
    if (isNextCard(e)) {
      this.game.nextCard()
    }
    if (isPrevCard(e)) {
      this.game.prevCard()
    }
    if (isAnswerButton(e)) {
      this.game.learning.sendAnswerWord()
    }
    if (isSkipButton(e)) {
      this.game.learning.skipWord()
    }
    if (isStartAgain(e)) {
      this.game.learning.startAgain()
    }
  }

  onKeydown(event) {
    const key = event.key.toLowerCase()
    const $card = this.game.cards? this.game.cards.$card.$el: ''
    const $skip = this.game.learning? this.game.learning.$skip.$el: ''
    const isNextBtnOff = this.game.cards.$nextBtn.attr('disabled') === 'true'
    const isPrevBtnOff = this.game.cards.$prevBtn.attr('disabled') === 'true'
    if (key === 'enter' && event.target.dataset.id === 'answer-input') {
      this.game.learning.sendAnswerWord()
    } else if (event.code === 'ShiftRight' && $skip) {
      this.game.learning.skipWord()
    } else if (key === 'enter' && $card) {
      this.game.cards.translateCard()
    } else if ((key === 'arrowleft' || key ==='a') && $card && !isPrevBtnOff) {
      this.game.prevCard()
    } else if ((key === 'arrowright'|| key ==='d') && $card && !isNextBtnOff) {
      this.game.nextCard()
    }
  }
}
