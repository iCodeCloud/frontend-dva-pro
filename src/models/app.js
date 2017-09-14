import {hashHistory} from 'dva/router';
import {login} from '../services/appService';

export default {
  namespace: 'app',
  state: {
    isLogin: false,
    userInfo: null,
    current: 'dashboard',
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        console.log('app=', pathname);
      });
    },
  },
  effects: {
    *fetch({payload}, {call, put}) {
      yield put({type: 'save'});
    },
    *login({payload}, {call, put, select}) {
      const {data} =  yield call(login, payload);
      if (data.code === 200) {
        yield put({
          type: 'save',
          payload: {
            userInfo: data.data, // 接口返回的用户信息
            isLogin: true,
            current: 'dashboard'
          }
        });
        hashHistory.push('/user');
      } else {
        hashHistory.push('/user');
        console.log('else....');
      }
    }
  },
  reducers: {
    save(state, action) {
      return {...state, ...action.payload}; // 更新state
    },
  }
};
