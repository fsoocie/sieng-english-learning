import {createCards} from '@/components/mainGame/game.template';
import {$, Dom} from '@core/Dom';
import {
  prevCurrentWord, nextCurrentWord, resetCurrentWord
} from '@/redux/actionCreators';

export class Cards {
  constructor(selector, options) {
    this.$root = selector instanceof Dom ? selector : $(selector)
    this.anim = options.anim
    this.store = options.store
    this.moduleName = options.moduleName
    this.init()
  }
  init() {
    if (!this.gameState.currentWord) {
      this.store.dispatch(resetCurrentWord(this.moduleName))
    }
    this.$root.html(this.toHTML(this.gameState.currentWord.english))
    this.findElems()
    this.updateButtons(this.gameState.currentIndex)
  }
  toHTML(initialWord) {
    return createCards(initialWord)
  }
  translateCard() {
    if (!this.anim()) {
      this.$card.toggleClass('game__card-translated')
      this.$word.animate('card-word-opacity', 1000)
      this.anim(1000)
      this.$word.text() === this.gameState.currentWord.english
        ? this.$word.text(this.gameState.currentWord.russian)
        : this.$word.text(this.gameState.currentWord.english)
    }
  }
  changeCard(type, animationName, animationDuration) {
    if (!this.anim()) {
      this.$card.removeClass('game__card-translated')
      this.$card.animate(animationName, animationDuration)
      this.anim(animationDuration)
      type === 'next'
        ? this.store.dispatch(nextCurrentWord(this.moduleName))
        : this.store.dispatch(prevCurrentWord(this.moduleName))
      this.updateButtons(this.gameState.currentIndex)
      setTimeout(() => {
        this.$word.text(this.gameState.currentWord.english)
      }, animationDuration / 2)
    }
  }
  updateButtons(i) {
    this.$nextBtn.removeAttr('disabled')
    this.$prevBtn.removeAttr('disabled')
    if (i === Object.keys(this.gameState.words).length - 1) {
      this.$nextBtn.attr('disabled', true)
    } if (i === 0) {
      this.$prevBtn.attr('disabled', true)
    }
  }
  get gameState() {
    return this.store.getState().modules[this.moduleName]
  }
  findElems() {
    this.$card = this.$root.find('[data-id=game-card]')
    this.$word = this.$root.find('[data-id=word]')
    this.$prevBtn = this.$root.find('[data-id=prev-card]')
    this.$nextBtn = this.$root.find('[data-id=next-card]')
  }
}
