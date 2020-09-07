import {
  PREV_CURRENT_WORD, NEXT_CURRENT_WORD,
  RESET_CURRENT_WORD, INCREASE_PROGRESS, REMOVE_MODULE
} from '@/redux/types';


export function rootReducer(action, state) {
  const payload = action.payload
  let module
  let moduleName
  switch (action.type) {
    case NEXT_CURRENT_WORD:
      module = state.modules[payload.moduleName]
      return getNewModuleState(
          state, payload.moduleName, module.currentIndex + 1
      )
    case PREV_CURRENT_WORD:
      module = state.modules[payload.moduleName]
      return getNewModuleState(
          state, payload.moduleName, module.currentIndex - 1
      )
    case RESET_CURRENT_WORD:
      return getNewModuleState(state, payload.moduleName, 0)
    case INCREASE_PROGRESS:
      module = state.modules[payload.moduleName]
      moduleName = payload.moduleName
      const words = state.modules[moduleName].words
      words.splice(payload.index, 1, {...words[payload.index],
        progress: words[payload.index].progress + 1})
      return {...state, modules: {...state.modules,
        [moduleName]: {...state.modules[moduleName], words}}}
    case REMOVE_MODULE:
      const modules = {...state.modules}
      delete modules[payload.id]
      return {...state, modules: modules}
    default:
      return {...state}
  }
}

function getNewModuleState(state, moduleName, index) {
  module = state.modules[moduleName]
  return {...state, modules: {...state.modules,
    [moduleName]: {...state.modules[moduleName],
      currentIndex: index,
      currentWord: module.words[index]
    }}}
}
