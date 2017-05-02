import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import '../node_modules/react-datepicker/dist/react-datepicker.css'; // eslint-disable-line no-unused-vars
import '../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom'
import ConfigurationStore from './ConfigurationStore'

const store = ConfigurationStore()

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App/>
  </Provider>
  </Router>,
  document.getElementById('root')
);
