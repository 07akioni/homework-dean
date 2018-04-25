import axios from 'axios'

export default {
  namespace: 'tableInfo',
  state: {
    info: []
  },
  effects: {
    *fetchTableInfo (action, { call, put }) {
      const info = yield call(fetchTableInfo)
      yield put({ type: 'setTableInfo', payload: info })
    }
  },
  reducers: {
    setTableInfo (state, { payload: info }) {
      return {
        ...state,
        info
      }
    }
  }
}

function fetchTableInfo () {
  return axios.get('/table/info').then(res => res.data)
}
