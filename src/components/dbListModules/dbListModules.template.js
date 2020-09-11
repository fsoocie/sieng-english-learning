import {
  toRightEnding, toRussianMonth, parseDate, getDateDMY, lengthObj
} from '@core/utils';

export function createModuleList(state) {
  const groups = {}
  Object.keys(state.modules).forEach(module => {
    module = state.modules[module]
    const date = getDateDMY(module.date)
    if (date in groups) {
      groups[date] = [...groups[date], module]
    } else {
      groups[date] = [module]
    }
  })
  return `
  <section class="modules-groups">
    ${Object.keys(groups)
      .sort((a, b) => parseDate(a) - parseDate(b))
      .map(key => createGroup(key, groups[key]))
      .join('')}
    </section>
  `
}

function createGroup(date, modules) {
  return `
    <div class="group">
      <div class="group__date">
          <span class="group__number">
            ${new Date(date).getDate()} 
            ${toRussianMonth(new Date(date).getMonth())}
          </span>
      </div>
      ${modules.map(createModule).join('')}    
    </div>
  `
}

function createModule(module) {
  const wordsCount = lengthObj(module.words)
  return `
  <a href="/#main/${module.id}">  
    <div class="group__module">
       <span class="group__count-words">
          ${wordsCount} ${toRightEnding(wordsCount)}
       </span>
       <span class="group__module-title">${module.name}</span>
    </div>
  </a>  
  `
}


