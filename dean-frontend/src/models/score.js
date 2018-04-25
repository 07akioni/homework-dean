import axios from 'axios'

export default {
  namespace: 'score',
  state: {
    info: []
  },
  effects: {
    *fetchAllScore (action, { call, put }) {
      const info = yield call(fetchAllScore)
      yield put({ type: 'setAllScore', payload: info })
    }
  },
  reducers: {
    setAllScore (state, { payload: info }) {
      return {
        ...state,
        info
      }
    }
  }
}

function fetchAllScore () {
  return axios.get('/score').then(res => res.data)
}