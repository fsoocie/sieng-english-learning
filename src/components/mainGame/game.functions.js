import {$} from '@core/Dom';
import {getData} from '@core/utils';

export const gameTypes = ['cards', 'learning']

export function isExistTypeGame(event) {
  const typegame = $(event.target).data['typegame']
  return gameTypes.includes(typegame)
}

export function isCard(event) {
  return getData(event).id === 'game-card' || getData(event).id === 'word'
}

export function isNextCard(event) {
  const $target = $(event.target)
  return (($target.parent.data.id === 'next-card')
    && ($target.parent.attr('disabled') !== 'true'))
   || $target.data.id === 'next-card' && $target.attr('disabled') !== 'true'
}

export function isPrevCard(event) {
  const $target = $(event.target)
  return (($target.parent.data.id === 'prev-card')
    && ($target.parent.attr('disabled') !== 'true'))
    || $target.data.id === 'prev-card' && $target.attr('disabled') !== 'true'
}

export function isAnswerButton(event) {
  return getData(event).id === 'answer-button'
}

export function isNoActiveTypeGame(event) {
  return !event.target.parentNode.classList.contains('themes-game_active')
    && !event.target.classList.contains('themes-game_active')
}

export function isSkipButton(event) {
  return event.target.dataset.id === 'skip-word'
}

export function $toGameType(type) {
  return $(document.querySelector(`div[data-typegame=${type}]`))
}
