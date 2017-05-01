import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostForm from './PostForm';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const persitstedState = loadState();
const store = createStore(
  rootReducer,
  persitstedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
)

store.subscribe(throttle(() => {
  saveState({
    posts: store.getState().posts
  })
}, 1000))

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App/>
  </Provider>
  </Router>,
  document.getElementById('root')
);
