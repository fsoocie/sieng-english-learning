export function getData(event) {
  return event.target.dataset
}

export function debounce(fn, delay) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export function definePage(ActiveRoute, routes) {
  switch (ActiveRoute.route) {
    case 'main':
      return routes.dictionaryMain
    case 'dashboard':
      return routes.dictionaryDashboard
    case 'editor':
      return routes.dictionaryEditor
    default:
      return routes.dictionaryDashboard
  }
}

export function toRightEnding(count) {
  const digit = count % 10
  if (count >= 10 && count <=20) return 'слов'
  else if (count % 10 === 1) return 'слово'
  else if (digit > 1 && digit < 5) return 'слова'
  else if ((digit > 4 && digit < 10) || digit === 0) return 'слов'
}

export function toRussianMonth(num) {
  const mouths = [
    'Января', 'Февраля', 'Марта',
    'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ]
  return mouths[num]
}

export function getDateDMY(date) {
  date = typeof date === 'string'? new Date(date) : date
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
}

export function parseDate(date) {
  const from = date.split('.')
  return new Date(from[2], from[1] - 1, from[0])
}
