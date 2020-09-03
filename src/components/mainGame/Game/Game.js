import {$, Dom} from '@core/Dom';
import {$toGameType} from '@/components/mainGame/game.functions';
import {Cards} from '@/components/mainGame/Game/Cards';
import {Learning} from '@/components/mainGame/Game/Learning';

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
      anim: this.anim.bind(this), store: this.store, moduleName: this.moduleName
    }
    this.cards = new Cards(this.$root, options)
  }

  changeGameType(typegame) {
    if (!this.animation) {
      this.selectActiveTheme(typegame)
      this.$root.animate('change-game-type', 600)
      this.anim(600)
      setTimeout(() => {
        const options = {
          anim: this.anim.bind(this),
          store: this.store, moduleName: this.moduleName
        }
        typegame === 'cards'
          ? this.cards = new Cards(this.$root, options)
          : this.learning = new Learning(this.$root, options)
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

  anim(duration) {
    if (duration) {
      this.animation = true
      setTimeout(() => {
        this.animation = false
      }, duration)
    }
    return this.animation
  }
}
