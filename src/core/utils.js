import {$} from '@core/Dom';

export function $toGameType(type) {
  return $(document.querySelector(`div[data-typegame=${type}]`))
}

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
