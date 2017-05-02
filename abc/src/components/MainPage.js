import React, { Component } from 'react';
import ListPost from './ListPost'
import {connect} from 'react-redux'
import { addPost, sortPost, deletePost } from '../actions'
import PostForm from './PostForm'
import moment from 'moment'
import { Link, Route } from 'react-router-dom';

class MainPage extends Component {

  state = {
    posts: this.props.posts,
    ascTitle: true,
    ascDate: true
  }

  handleSortbyTitle = () => {
    if (this.state.ascTitle) {
      this.setState({
        posts: this.state.posts.sort(function(a, b) {
               let titleA = a.title.toUpperCase();
               let titleB = b.title.toUpperCase();
              return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        }),
        ascTitle: !this.state.ascTitle
      })
    } else {
      this.setState({
        posts: this.state.posts.sort(function(a, b) {
          var titleA = a.title.toUpperCase();
          var titleB = b.title.toUpperCase();
        return (titleA < titleB) ? 1 : (titleA > titleB) ? -1 : 0;
      }),
      ascTitle: !this.state.ascTitle
      })
    }
  }

  handleSortbyDate = () => {
    if (this.state.ascDate) {
      this.setState({
        posts: this.state.posts.sort(function(a, b) {
          var dateA = moment(a.startDate)
          var dateB = moment(b.startDate)
        return (dateA < dateB) ? -1 : (dateA > dateB) ? 1 : 0;
      }),
      ascDate: !this.state.ascDate
      })
    } else {
      this.setState({
        posts: this.state.posts.sort(function(a, b) {
          var dateA = moment(a.startDate)
          var dateB = moment(b.startDate)
        return (dateA < dateB) ? 1 : (dateA > dateB) ? -1 : 0;
      }),
      ascDate: !this.state.ascDate
      })
    }
  }

  render() {
    return (
      <div>
      <center >
        <h1>Welcome to ABC Blog</h1>
        <hr className="small"/>
      </center>
        <div className="container">
        <div className="row">
            <center>
              <p>Sort By</p>
              <ul className="breadcrumb col-sm-4 col-sm-offset-4">
                <li>
                  <a style={{"cursor": "pointer"}} onClick={this.handleSortbyTitle}><i className={(this.state.ascTitle) ? "fa fa-sort-asc fa-x" : "fa fa-sort-desc fa-x"} /> Title</a>
                </li>
                <li>
                  <a style={{"cursor": "pointer"}} onClick={this.handleSortbyDate}>Date <i className={(this.state.ascDate) ? "fa fa-sort-asc fa-x" : "fa fa-sort-desc fa-x"} /></a>
                </li>
              </ul>
            </center>
            <br/>
            <center className="col-sm-8 col-md-offset-2">
              <Link to={'/new-post'}><button className="btn btn-success btn-md btn-block" type="button"><span className="glyphicon glyphicon-plus"></span> Add New Post</button></Link><br/>
              <ListPost posts={this.props.posts} deletePost={this.props.deletePost} ></ListPost>
            </center>
          </div>
        </div>
        <footer>
          <div className="progress">
            <div className="progress-bar" style={{"width": "100%"}}></div>
          </div>
          <center><copyright>(c) 2017 Copyright Holder All Rights Reserved. </copyright></center>
          <hr/>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { addPost, sortPost, deletePost })(MainPage);
