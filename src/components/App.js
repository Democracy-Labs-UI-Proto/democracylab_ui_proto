import React, { Fragment, Component } from 'react';
// import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainDeck from './MainDeck';
import createAppStore from '../store/store';

const store = createAppStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <HashRouter> */}
        <Fragment>
          {/* <Route exact path="/" component={MainDeck} /> */}
          <MainDeck />
        </Fragment>
        {/* </HashRouter> */}
      </Provider>
    );
  }
}
