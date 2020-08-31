import {$, Dom} from '@core/Dom';
import {$toGameType, gameTypes} from '@/components/mainGame/game.functions';
import {Cards} from '@/components/mainGame/Game/Cards';

export class Game {
  constructor(selector, options) {
    this.$root = selector instanceof Dom ? selector : $(selector)
    this.type = options.type || 'cards'
    this.moduleName = options.moduleName
    this.store = options.store
    this.gameTypes = options.gameTypes
    this.$gameTypes = options.gameTypes.map($toGameType)
    this.animation = false
    this.init()
  }

  init() {
    this.selectActiveTheme(this.type)
    const options = {
      anim: this.anim,
      store: this.store,
      moduleName: this.moduleName
    }
    this.cards = new Cards(this.$root, options)
    this.findElems()
  }

  changeGameType(typegame) {
    if (!this.animation) {
      this.selectActiveTheme(typegame)
      this.$root.animate('change-game-type', 600)
      this.anim(600)
      setTimeout(() => {
        const options = {
          anim: this.anim,
          store: this.store,
          moduleName: this.moduleName
        }
        typegame === 'cards'
          ? this.cards = new Cards(this.$root, options)
          : this.$root.html(gameTypes['learning'](this.gameState.currentWord.english))
        this.findElems()
      }, 290)
    }
  }

  selectActiveTheme(typegame) {
    this.$gameTypes.forEach($type => {
      if ($type.data['typegame'] === typegame) {
        $type.addClass('themes-game_active')
      } else $type.removeClass('themes-game_active')
    })
  }

  translateCard() {
    this.cards.translateCard()
  }

  nextCard() {
    if (!this.animation) {
      this.cards.changeCard('next', 'next-card', 600)
    }
  }

  prevCard() {
    if (!this.animation) {
      this.cards.changeCard('prev', 'prev-card', 600)
    }
  }

  sendAnswerWord() {
    if (this.$input.value() === this.$word.text()) {
      this.changeLearningWord('right-input-word', 1000, 'this.gamesState[2]')
    } else if (this.$input.value() !== this.$word.text()) {
      this.$input.animate('wrong-input-word', 850)
    }
  }

  skipWord() {
    this.$word.text('right-word')
    this.changeLearningWord('skip-word', 3000, 'skipped')
  }

  changeLearningWord(animate, duration, value) {
    this.$word.animate(animate, duration)
    this.$input.attr('disabled', true)
    setTimeout(() => {
      this.$word.text(value)
      this.$input.value('').removeAttr('disabled').focus()
    }, duration)
  }

  anim(duration) {
    if (duration) {
      this.animation = true
      setTimeout(() => {
        this.animation = false
      }, duration)
    }
    return this.animation
  }

  findElems() {
    this.$word = this.$root.find('[data-id=word]')
    this.$input = this.$root.find('[data-id=answer-input]')
    this.$skip = this.$root.find('[data-id=skip-word]')
  }

  get gameState() {
    return this.store.getState().modules[this.moduleName]
  }
}
