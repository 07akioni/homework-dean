import axios from 'axios'

export default {
  namespace: 'choice',
  state: {
    info: []
  },
  effects: {
    *fetchAllChoice (action, { call, put }) {
      const info = yield call(fetchAllChoice)
      yield put({ type: 'setAllChoice', payload: info })
    }
  },
  reducers: {
    setAllChoice (state, { payload: info }) {
      return {
        ...state,
        info
      }
    }
  }
}

function fetchAllChoice () {
  return axios.get('/choice').then(res => res.data)
}