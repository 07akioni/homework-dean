import axios from 'axios'

export default {
  namespace: 'lesson',
  state: {
    info: []
  },
  effects: {
    *fetchAllLesson (action, { call, put }) {
      const info = yield call(fetchAllLesson)
      yield put({ type: 'setAllLesson', payload: info })
    }
  },
  reducers: {
    setAllLesson (state, { payload: info }) {
      return {
        ...state,
        info
      }
    }
  }
}

function fetchAllLesson () {
  return axios.get('/lesson').then(res => res.data)
}
