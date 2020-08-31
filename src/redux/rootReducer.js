import {PREV_CURRENT_WORD, NEXT_CURRENT_WORD} from '@/redux/types';


export function rootReducer(action, state) {
  const payload = action.payload
  let module
  switch (action.type) {
    case NEXT_CURRENT_WORD:
      module = state.modules[payload.moduleName]
      return getNewIndexState(state, payload, module.currentIndex + 1)
    case PREV_CURRENT_WORD:
      module = state.modules[payload.moduleName]
      return getNewIndexState(state, payload, module.currentIndex - 1)
    default:
      return {...state}
  }
}

function getNewIndexState(state, payload, index) {
  module = state.modules[payload.moduleName]
  return {...state, modules: {...state.modules,
    [payload.moduleName]: {...state.modules[payload.moduleName],
      currentIndex: index,
      currentWord: module.words[index]
    }}}
}
