import {$} from '@core/Dom';
import {
  createCards,
  createLearningWords
} from '@/components/mainGame/game.template';
import {getData} from '@core/utils';

export const gameTypes = {
  cards: createCards,
  learning: createLearningWords
}

export function isExistTypeGame(event) {
  const typegame = $(event.target).data['typegame']
  return Object.keys(gameTypes).includes(typegame)
}

export function isCard(event) {
  return getData(event).id === 'game-card' || getData(event).id === 'word'
}

export function isNextCard(event) {
  return event.target.parentNode.dataset.id === 'next-card'
    || getData(event).id === 'next-card'
}

export function isPrevCard(event) {
  return event.target.parentNode.dataset.id === 'prev-card'
    || getData(event).id === 'prev-card'
}

export function isAnswerButton(event) {
  return getData(event).id === 'answer-button'
}
