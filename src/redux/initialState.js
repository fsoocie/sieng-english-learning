const defaultState = {
  modules: {
    programming: {
      date: '23.05.2002',
      currentIndex: 0,
      currentWord: {
        english: 'success',
        russian: 'успех',
        progress: 3
      },
      words: [
        {
          english: 'success',
          russian: 'успех',
          progress: 3
        },
        {
          english: 'split',
          russian: 'разделять',
          progress: 5
        },
        {
          english: 'join',
          russian: 'соединять',
          progress: 9
        }
      ]
    }
  }
}

export function toInitialState(initialState) {
  const state = JSON.parse(JSON.stringify(initialState)) ? initialState: {}
  return Object.keys(state).length
    ? state
    : JSON.parse(JSON.stringify(defaultState))
}
