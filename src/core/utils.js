import {$} from '@core/Dom';

export function $toGameType(type) {
  return $(document.querySelector(`div[data-typegame=${type}]`))
}

export function getData(event) {
  return event.target.dataset
}
