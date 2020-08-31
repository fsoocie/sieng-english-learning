import {
  PREV_CURRENT_WORD,
  NEXT_CURRENT_WORD,
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
