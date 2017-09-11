import {queryUserList} from '../services/userService';
import {showLoading, hideLoading} from 'react-redux-loading-bar';

export default {
  namespace: 'user',
  state: {
    userList: [],
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        console.log('pathname=', pathname);
        if (pathname === '/user') {
          dispatch({
            type: 'queryUserList',
            payload: {}
          });
        }
      });
    }
  },
  effects: {
    *queryUserList({payload}, {call, put, select}) {
      try {
        yield put(showLoading());// 开始顶部进度条
        const {data} = yield call(queryUserList, {...payload});
        yield put({
          type: 'save',
          payload: {
            userList: data
          }
        });
      } finally {
        yield put(hideLoading());// 结束顶部进度条
      }
    }
  },
  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    }
  },
};
