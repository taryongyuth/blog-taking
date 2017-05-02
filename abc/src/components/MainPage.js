import React, { Component } from 'react';
import ListPost from './ListPost'
import {connect} from 'react-redux'
import { addPost, sortPost, deletePost } from '../actions'
import PostForm from './PostForm'
import { Link, Route } from 'react-router-dom';

class MainPage extends Component {

  componentDidMount(){
    this.props.addPost({
      "title": "CAT",
      "cover": "http://www.cats.org.uk/uploads/branches/1/environment-faqs.jpg",
      "content": "Plus, you can now set your own date range for data—select from previous month or week or set your own custom dates.Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
    })
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
              <ul className="breadcrumb col-sm-4 col-md-offset-4">
                <li><a href="#">Title</a></li>
                <li><a href="#">Date</a></li>
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
