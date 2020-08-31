import {nextCardSVG, previousCardSVG} from '@/inlineSVG';

export function createCards(word = '') {
  return `
    <div class="game__card game__block" data-id="game-card">
        <span data-id="word">${word}</span>
    </div>
    <div class="game__controls">
      <button id="previous-card-SVG" data-id="prev-card">
        ${previousCardSVG}
      </button>
      <button id="next-card-SVG" data-id="next-card">${nextCardSVG}</button>
    </div>
  `
}

export function createLearningWords() {
  return `
  <div class="learning-word game__block">
    <div class="learning-word__skip" data-id="skip-word">
      <span class="learning-word__skip-span"
       data-id="skip-word">Пропустить</span>
    </div>
    <div class="learning-word__word">
      <span class="learning-word__word-span" data-id="word">handler</span>
    </div>
    <div class="game__answer">
        <input data-id="answer-input" type="text" class="game__answer-input"
        placeholder="Введите слово..." onfocus="this.placeholder=''"
         onblur="this.placeholder='Введите слово...'">
      <button class="game__answer-button" data-id="answer-button">Ответ</button>
    </div>
  </div>
  `
}

export function createResult() {
  return `
    <div class="result game__block">
      <div class="result__column">
        <div class="result__body">
          <div class="right">
            <div class="right__progress"></div>
            <div class="right__description">
              <div class="right__title">Правильно</div>
              <div class="right__count">3</div>
            </div>
          </div>
          <div class="wrong">
            <div class="wrong__progress"></div>
            <div class="wrong__description">
              <div class="wrong__title">Неправильно</div>
              <div class="wrong__count">1</div>
            </div>
          </div>
        </div>
        <div class="result__restart">
          <button class="result__restart-button">Начать сначала</button>
        </div>
      </div>                    
    </div>
  `
}
