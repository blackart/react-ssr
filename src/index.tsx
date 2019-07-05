import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import * as Loadable from 'react-loadable';
import * as history from 'history';

import {Router} from 'react-router';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';

import App from './App';
import AppStore from './store/AppStore';
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n/i18n";

const root = document.getElementById('root');
const browserHistory = history.createBrowserHistory();
const routerStore = new RouterStore();
const syncHistory = syncHistoryWithStore(browserHistory, routerStore);

// const initialState = isServer() ? {} : window.__PRELOADED_STATE__ || {};
const initialState = {language: i18n.language};
const appStore = new AppStore(initialState);

const AppWrapper = (
  <Provider routerStore={routerStore} appStore={appStore}>
      <Router history={syncHistory}>
          <I18nextProvider i18n={i18n}>
              <App/>
          </I18nextProvider>
      </Router>
  </Provider>
);

if (root && root.hasChildNodes()) {
    Loadable.preloadReady().then(() => {
        console.log('hydrate');
        ReactDOM.hydrate(AppWrapper, root);
    });
} else {
    console.log('render');
    ReactDOM.render(AppWrapper, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
