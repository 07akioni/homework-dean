import axios from 'axios'

export default {
  namespace: 'person',
  state: {
    info: []
  },
  effects: {
    *fetchAllPerson (action, { call, put }) {
      const info = yield call(fetchAllPerson)
      yield put({ type: 'setAllPerson', payload: info })
    }
  },
  reducers: {
    setAllPerson (state, { payload: info }) {
      return {
        ...state,
        info
      }
    }
  }
}

function fetchAllPerson () {
  return axios.get('/person').then(res => res.data)
}
