import React from 'react';
import PropTypes from 'prop-types';
import {Router} from 'dva/router';

const cached = {};
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
};

const Routers = ({history, app}) => {
  const routes = [
    {
      path: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/app'));
          cb(null, require('./routes/App'));
        }, 'app');
      },
      // getComponent(nextState, cb) {
      //   require.ensure([], (require) => {
      //     cb(null, require('./routes/Dashboard'));
      //   }, 'dashboard');
      // },
      // getIndexRoute(nextState, cb) {
      //   require.ensure([], (require) => {
      //     registerModel(app, require('./models/login'));
      //     cb(null, require('./routes/Login'));
      //   }, 'Login');
      // },
      childRoutes: [
        {
          path: '/user',
          breadcrumbName: '用户管理1',
          breadcrumbIcon: 'userManager1',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/user'));
              cb(null, require('./routes/User'));
            }, 'User');
          },
        },
        {
          path: '/log',
          breadcrumbName: '日志管理1',
          breadcrumbIcon: 'logManager1',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/log'));
              cb(null, require('./routes/Log'));
            }, 'Log');
          },
        },
      ],
    },
  ];

  const createElement = (Component, props) => {
    return <Component {...props} key={props.location.pathname}/>;
  };

  return (<Router
    createElement={createElement}
    history={history}
    routes={routes}
  />);

};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;

