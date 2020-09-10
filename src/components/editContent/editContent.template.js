import {deleteWordSVG} from '@/inlineSVG';

export function createBlanks(state) {
  const blanks = state.words.map((word, i) => {
    return createBlank(i, word.english, word.russian)
  }).join('')
  return `
    <section class="blanks">
    ${blanks}
    </section>
  `
}

export function createBlank(i, en = '', ru = '') {
  return `
    <div class="blank">
      <div class="blank__header">
        <div class="blank__number">${i+1}</div>
        <button class="delete-word-SVG" data-id="delete-word">
            ${deleteWordSVG}
        </button>
      </div>
      <div class="blank__main">
        <div class="blank__russian-word">
          <input type="text" class="blank__input" value="${en}" />
        </div>
        <div class="blank__english-word">
          <input type="text" class="blank__input" value="${ru}" />
        </div>
      </div>
    </div>
  `
}
