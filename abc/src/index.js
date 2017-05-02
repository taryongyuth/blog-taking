import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // eslint-disable-line no-unused-vars
import '../node_modules/react-datepicker/dist/react-datepicker.css'; // eslint-disable-line no-unused-vars
import '../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
