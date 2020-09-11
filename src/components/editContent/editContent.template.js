import {deleteWordSVG} from '@/inlineSVG';

export function createBlanks(state) {
  const blanks = []
  Object.keys(state.words).forEach(i => {
    blanks.push(createBlank(
        Number(i), state.words[i].progress,
        state.words[i].english, state.words[i].russian))
  })
  return `
    <section class="blanks">
    ${blanks.join('')}
    </section>
  `
}

export function createBlank(i, progress = 0, en = '', ru = '') {
  return `
    <div class="blank">
      <div class="blank__header">
        <div class="blank__number">${i+1}</div>
        <button class="delete-word-SVG" data-id="delete-word">
            ${deleteWordSVG}
        </button>
      </div>
      <div class="blank__main" data-id="blank" data-progress='${progress}'>
        <div class="blank__russian-word">
          <input 
            data-id="input_en"
            type="text"
            class="blank__input" value="${en}" />
        </div>
        <div class="blank__english-word">
          <input 
            data-id="input_ru"
            type="text"
            class="blank__input" value="${ru}" />
        </div>
      </div>
    </div>
  `
}
