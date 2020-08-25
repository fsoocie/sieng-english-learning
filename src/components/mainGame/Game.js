import {$, Dom} from '@core/Dom';
import {gameTypes} from '@/components/mainGame/game.functions';
import {$toGameType} from '@core/utils';

export class Game {
  constructor(selector, options) {
    this.$root = selector instanceof Dom ? selector : $(selector)
    this.state = options.state
    this.type = options.type || 'cards'
    this.$gameTypes = Object.keys(gameTypes).map($toGameType)
    this.animation = false
    this.init()
  }

  init() {
    this.selectActiveTheme(this.type)
    this.$root.html(gameTypes[this.type]())
    this.resetElems()
  }

  changeGameType(typegame) {
    if (!this.animation) {
      this.selectActiveTheme(typegame)
      this.$root.animate('change-game-type', 600)
      this.setAnimation(600)
      setTimeout(() => {
        this.$root.html(gameTypes[typegame]())
        this.resetElems()
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
    if (!this.animation) {
      this.$card.toggleClass('game__card-translated')
      this.$word.animate('card-word-opacity', 1000)
      this.$word.text(this.state[0].russian)
      this.setAnimation(1000)
    }
  }

  changeCard(animationName, animationDuration, value) {
    if (!this.animation) {
      this.$card.removeClass('game__card-translated')
      this.$card.animate(animationName, animationDuration)
      this.setAnimation(animationDuration)
      setTimeout(() => {
        this.$word.text(value)
      }, animationDuration / 2)
    }
  }

  nextCard() {
    this.changeCard('next-card', 600, this.state[2].english)
  }

  prevCard() {
    this.changeCard('prev-card', 600, this.state[0].english)
  }

  sendAnswerWord() {
    if (this.$input.value() === this.$word.text()) {
      this.changeLearningWord('right-input-word', 1000, this.state[2].english)
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

  setAnimation(duration) {
    this.animation = true
    setTimeout(() => {
      this.animation = false
    }, duration)
  }

  resetElems() {
    this.$word = $('[data-id=word]')
    this.$input = $('[data-id=answer-input]')
    this.$card = $('[data-id=game-card]')
    this.$skip = $('[data-id=skip-word]')
  }
}
