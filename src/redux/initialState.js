const defaultState = {
  modules: {
    '1599486339620': {
      name: 'Программирование',
      date: 'Thu Jun 25 2020 00:00:00 GMT+0300 (Москва, стандартное время)',
      id: '1599486339620',
      words: [
        {
          english: 'term',
          russian: 'термин',
          progress: 0,
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
    },
    '1599486339621': {
      name: 'Фильмы',
      date: 'Wed May 20 2020 00:00:00 GMT+0300 (Москва, стандартное время)',
      id: '1599486339621',
      words: [
        {
          english: 'ball',
          russian: 'мяч',
          progress: 0
        },
        {
          english: 'movie',
          russian: 'фильм',
          progress: 8
        },
        {
          english: 'holywood',
          russian: 'голивуд',
          progress: 3
        },
        {
          english: 'scene',
          russian: 'сцена',
          progress: 10
        },
        {
          english: 'to watch TV',
          russian: 'смотреть телевизор',
          progress: 5
        },
      ]
    },
    '1599486339625': {
      name: 'Разговорный',
      date: 'Thu Sep 03 2020 00:00:00 GMT+0300 (Москва, стандартное время)',
      id: '1599486339625',
      words: [
        {
          english: 'speak',
          russian: 'говорить',
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
