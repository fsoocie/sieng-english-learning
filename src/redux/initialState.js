const defaultState = {
  modules: {
    programming: {
      date: '23.05.2002',
      words: [
        {
          english: 'term',
          russian: 'термин',
          progress: 0
        },
        {
          english: 'implementation',
          russian: 'реализация',
          progress: 8
        },
        {
          english: 'success',
          russian: 'успех',
          progress: 3
        },
        {
          english: 'join',
          russian: 'соединять',
          progress: 10
        },
        {
          english: 'split',
          russian: 'разделять',
          progress: 5
        },
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
