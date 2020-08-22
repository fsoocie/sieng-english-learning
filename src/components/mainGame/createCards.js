export function createCards(word) {
  return `
    <div class="game__card game__block">${word}</div>
      <div class="game__controls">
        <div id="previous-card-SVG"></div>
        <div id="next-card-SVG"></div>
    </div>
  `
}
