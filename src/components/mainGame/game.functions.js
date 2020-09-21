import {$} from '@core/Dom';
import {getData} from '@core/helpers/utils';

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

export function isStartAgain(event) {
  return event.target.dataset.id === 'start-again'
}

export function $toGameType(type) {
  return $(document.querySelector(`div[data-typegame=${type}]`))
}

export function rightWordStyles(width) {
  return `
    "background-color: rgb(35, 178, 109);
     height: 100%;
     width:${width};
     position: absolute;
     left: 0;
     top: 0"
  `
}

export function wrongWordStyles(width) {
  return `
    "background-color: rgb(255, 114, 91);
     height: 100%;
     width:${width};
     position: absolute;
     left: 0;
     top: 0";
  `
}
