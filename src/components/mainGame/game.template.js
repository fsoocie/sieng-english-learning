import {nextCardSVG, previousCardSVG} from '@/inlineSVG';

export function createCards() {
  return `
    <div class="game__card game__block">prick</div>
      <div class="game__controls">
        <div id="previous-card-SVG">${previousCardSVG}</div>
        <div id="next-card-SVG">${nextCardSVG}</div>
      </div>
  `
}

export function createLearningWords() {
  return `
  <div class="learning-word game__block">
    <div class="learning-word__skip">
      <span class="learning-word__skip-span">Пропустить</span>
    </div>
    <div class="learning-word__word">
      <span class="learning-word__word-span">handler</span>
    </div>
    <div class="game__answer">
        <input type="text" class="game__answer-input"
        placeholder="Введите слово...">
      <button class="game__answer-button">Ответ</button>
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
