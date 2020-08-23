import {$} from '@core/Dom';
import {
  createCards,
  createLearningWords
} from '@/components/mainGame/game.template';

export const gameTypes = {
  cards: createCards,
  learning: createLearningWords
}

export function isExistTypeGame(event) {
  const typegame = $(event.target).data['typegame']
  return Object.keys(gameTypes).includes(typegame)
}
