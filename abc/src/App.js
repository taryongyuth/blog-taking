import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PostForm from './PostForm';
import PostPage from './PostPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div >
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand col-sm-3 pull-right"><ActiveLink activeOnlyWhenExact to="/blog-taking/" label="Home" /></a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>
            </div>
          </nav>

        <Route exact path="/blog-taking" component={MainPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/posts/new" component={PostForm} />
      </div>
    );
  }
}

export default App;
