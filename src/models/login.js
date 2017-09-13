export default {
  namespace: 'login',
  state: {},
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        console.log('login=', pathname);
        if (pathname === '/login') {
          console.log('login.....!')
        }
      });
    }
  },
  effects: {},
  reducers: {},
};
