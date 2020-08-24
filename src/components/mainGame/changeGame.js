import {$} from '@core/Dom';
import {gameTypes} from '@/components/mainGame/game.functions';

export function changeGame(typegame) {
  const $game = $(document.querySelector('[data-id=game]'))
  const $gameTypes = Object.keys(gameTypes).map(type => {
    return $(document.querySelector(`div[data-typegame=${type}]`))
  })
  $gameTypes.forEach($type => {
    if ($type.data['typegame'] === typegame) {
      $type.addClass('themes-game_active')
      $game.html(gameTypes[typegame]())
    } else $type.removeClass('themes-game_active')
  })
}
