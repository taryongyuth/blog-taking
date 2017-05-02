import { loadState, saveState } from './localStorage'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle'
import rootReducer from './rootReducer';

const ConfigurationStore = () => {
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

  return store
}

export default ConfigurationStore
