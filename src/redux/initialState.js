export const defaultState = {
  modules: {},
  username: ''
}

export function toInitialState(initialState) {
  const state = JSON.parse(JSON.stringify(initialState)) ? initialState: {}
  return Object.keys(state).length
    ? state
    : JSON.parse(JSON.stringify(defaultState))
}
