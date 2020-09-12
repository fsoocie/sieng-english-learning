import {
  PREV_CURRENT_WORD, NEXT_CURRENT_WORD, RESET_CURRENT_WORD,
  INCREASE_PROGRESS, REMOVE_MODULE, ADD_MODULE, UPDATE_MODULE
} from '@/redux/types';


export const nextCurrentWord = (moduleName) => {
  return {
    type: NEXT_CURRENT_WORD,
    payload: {moduleName}
  }
}

export const prevCurrentWord = (moduleName) => {
  return {
    type: PREV_CURRENT_WORD,
    payload: {moduleName}
  }
}

export const resetCurrentWord = (moduleName) => {
  return {
    type: RESET_CURRENT_WORD,
    payload: {moduleName}
  }
}

export const increaseProgress = (moduleName, index) => {
  return {
    type: INCREASE_PROGRESS,
    payload: {moduleName, index}
  }
}

export const removeModule = (id) => {
  return {
    type: REMOVE_MODULE,
    payload: {id}
  }
}

export const addModule = (moduleName, moduleState) => {
  return {
    type: ADD_MODULE,
    payload: {moduleName, moduleState}
  }
}

export const updateModule = (moduleName, changes) => {
  return {
    type: UPDATE_MODULE,
    payload: {moduleName, changes}
  }
}

