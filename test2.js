import { querytest } from '../services/api';

export default {
  namespace: 'test',

  state: {
    testvalue: undefined,
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(querytest);
      yield put({
        type: 'querytestd',
        payload: response,
      });
    },
  },

  reducers: {
    querytestd(state, action) {
      console.log("action");
      console.log(action);
      return {
        ...state,
        testvalue: action.payload.mean,
      };
    },
  },
};
