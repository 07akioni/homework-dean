import axios from 'axios'

export default {
  namespace: 'teach',
  state: {
    info: []
  },
  effects: {
    *fetchAllTeach (action, { call, put }) {
      const info = yield call(fetchAllTeach)
      yield put({ type: 'setAllTeach', payload: info })
    }
  },
  reducers: {
    setAllTeach (state, { payload: info }) {
      return {
        ...state,
        info
      }
    }
  }
}

function fetchAllTeach () {
  return axios.get('/teach').then(res => res.data)
}