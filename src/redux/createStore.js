export default function createStore(rootReducer, initialState) {
  let state = rootReducer({type: '__INIT__'}, initialState)
  let listeners = []
  return {
    dispatch(action) {
      state = rootReducer(action, state)
      listeners.forEach(l => l(state))
    },
    subscribe(fn) {
      listeners.push(fn)
      return () => {
        listeners = listeners.filter(l => l !== fn)
      }
    },
    getState() {
      return state
    }
  }
}
