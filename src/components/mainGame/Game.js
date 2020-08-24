import {$, Dom} from '@core/Dom';
import {gameTypes} from '@/components/mainGame/game.functions';
import {$toGameType} from '@core/utils';

export class Game {
  constructor(selector, options) {
    this.$root = selector instanceof Dom? selector : $(selector)
    this.state = options.state
    this.type = options.type || 'cards'
    this.$gameTypes = Object.keys(gameTypes).map($toGameType)
    this.init()
  }

  init() {
    this.changeGameType(this.type)
  }
  destroy() {}
  changeGameType(typegame) {
    this.$gameTypes.forEach($type => {
      if ($type.data['typegame'] === typegame) {
        $type.addClass('themes-game_active')
        this.$root.html(gameTypes[typegame]())
      } else $type.removeClass('themes-game_active')
    })
    this.$word = $('[data-id=word]')
    this.$input = $('[data-id=answer-input]')
    this.$card = $(document.querySelector('[data-id=game-card]'))
  }
  translateCard() {
    this.$card.toggleClass('game__card-translated')
    this.$word.style('card-word-opacity 1s')
    this.$word.text(this.state[0].russian)
    this.animation = true
    setTimeout(() => {
      this.animation = false
      this.$word.style('')
    }, 1000)
  }
  nextCard() {
    this.$card.removeClass('game__card-translated').style('next-card 0.6s')
    this.animation = true
    setTimeout(() => {
      this.$word.text(this.state[2].english)
    }, 290)
    setTimeout(() => {
      this.$card.style('')
      this.animation = false
    }, 600)
  }
  prevCard() {
    this.$card.style('prev-card 0.6s')
    this.animation = true
    setTimeout(() => {
      this.$word.text(this.state[0].english)
    }, 290)
    setTimeout(() => {
      this.$card.style('')
      this.animation = false
    }, 600)
  }
  sendAnswerWord() {
    if (this.$input.value() === this.$word.text()) {
      this.nextLearningWord()
    }
  }
  nextLearningWord() {
    this.$word.text(this.state[2].english)
  }
}
