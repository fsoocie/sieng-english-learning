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
