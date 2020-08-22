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
