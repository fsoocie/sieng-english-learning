export const defaultState = {
  modules: {}
}

export function toInitialState(initialState) {
  const state = JSON.parse(JSON.stringify(initialState)) ? initialState: {}
  return Object.keys(state).length
    ? state
    : JSON.parse(JSON.stringify(defaultState))
}
