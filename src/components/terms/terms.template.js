import {progressColors} from '@core/constants';

export function createTerms(state) {
  console.log(state)
  const terms = [...state.words]
      .sort((a, b) => a.progress-b.progress)
      .map(createTerm).join('')
  return `
    <div class="terms__header">
      <span>Термины в модуле (${state.words.length})</span>
    </div>
    <div class="terms__content">
     ${terms}
    </div>
    <button class="edit">Добавить или удалить термины</button>
    `
}

export function createTerm(word) {
  let shadowColor
  let bgc
  if (word.progress > 9) {
    shadowColor = '#EAFFF2'
    bgc = '#EAFFF2'
  } else {
    shadowColor = progressColors[word.progress]
    bgc = '#FFFFFF'
  }
  return `
  <div class="term"
   style="box-shadow: 1px 1px 4px ${shadowColor}; background: ${bgc}"
   >
    <div class="term__english-word">
       <span>${word.english}</span>
     </div>
     <div class="term__russian-word">
       <span>${word.russian}</span>
    </div>
  </div>
  `
}