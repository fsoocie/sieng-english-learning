import {$, Dom} from '@core/Dom'
import {
  createLearningWords, createResult
} from '@/components/mainGame/game.template'
import {
  nextCurrentWord, resetCurrentWord,
  increaseProgress
} from '@/redux/actionCreators';
import {lengthObj} from '@core/helpers/utils';
import {userId} from '@/shared/FirebaseClient';

export class Learning {
  constructor(selector, options) {
    this.$root = selector instanceof Dom ? selector : $(selector)
    this.anim = options.anim
    this.store = options.store
    this.moduleName = options.moduleName
    this.processor = options.processor
    this.progress = null
    this.init()
  }
  init() {
    this.store.dispatch(resetCurrentWord(this.moduleName))
    this.progress = {right: 0, wrong: 0}
    this.$root.html(this.toHTML('learning'))
    this.findElems()
  }
  toHTML(type) {
    return type === 'learning'
      ? createLearningWords(this.gameState.currentWord.english)
      : createResult(this.progress)
  }
  sendAnswerWord() {
    if (this.$input.value().toLowerCase() ===
      this.gameState.currentWord.russian.toLowerCase()) {
      const newProgress = Number(
          this.gameState.words[this.gameState.currentIndex].progress) + 1
      this.processor.update(
          {progress: newProgress},
          // eslint-disable-next-line max-len
          `${userId()}/modules/${this.moduleName}/words/${this.gameState.currentIndex}`
      )
      this.store.dispatch(
          increaseProgress(this.moduleName, this.gameState.currentIndex)
      )
      this.progress = {...this.progress, right: this.progress.right+1}
      this.changeLearningWord('right-input-word', 1000)
    } else this.$input.animate('wrong-input-word', 850)
  }
  skipWord() {
    this.$word.text(this.gameState.currentWord.russian)
    this.changeLearningWord(
        'skip-word', 3000, this.gameState.currentWord.russian
    )
    this.progress = {...this.progress, wrong: this.progress.wrong+1}
    this.anim(3000)
  }
  changeLearningWord(animate, duration) {
    this.$word.animate(animate, duration)
    this.$input.attr('disabled', true)
    setTimeout(() => {
      if (lengthObj(this.gameState.words) === this.gameState.currentIndex + 1) {
        this.$root.html(this.toHTML('result'))
      } else {
        this.store.dispatch(nextCurrentWord(this.moduleName))
        this.$word.text(this.gameState.currentWord.english)
        this.$input.value('').removeAttr('disabled').focus()
      }
    }, duration - 10)
  }
  startAgain() {
    this.$root.animate('start-again', 900)
    this.anim(900)
    setTimeout(this.init.bind(this), 880)
  }
  findElems() {
    this.$input = this.$root.find('[data-id=answer-input]')
    this.$word = this.$root.find('[data-id=word]')
    this.$skip = this.$root.find('[data-id=skip-word]')
  }
  get gameState() {
    return this.store.getState().modules[this.moduleName]
  }
}
