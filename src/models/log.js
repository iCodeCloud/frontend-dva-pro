import {queryUserList} from '../services/userService';

export default {
  namespace: 'user',
  state: {
    userList: [],
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        console.log('pathname=', pathname);
        if (pathname === '/log') {
          console.log('log.....!')
        }
      });
    }
  },
  effects: {},
  reducers: {},
};
