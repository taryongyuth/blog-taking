import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';
import { loadState } from '../localStorage'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class PostPage extends Component {

  render() {
    const { post } = this.props

    let postPage
    if (post === undefined) {
      postPage = (<Redirect to="/blog-taking" />)
    } else {
      postPage = (
        <div>
        <center>
        <h1>{post.title}</h1>
        <img src={post.cover}></img>
        <div><td dangerouslySetInnerHTML={{__html: post.content}}/></div>
        <Link to={`blog-taking`}><button className="btn btn-success btn-sm btn-block" type="button">Back To Main Page</button></Link>
        </center>
        </div>
      )
    }

    return (
      <div className="panel panel-success col-sm-8 col-md-offset-2">
        { postPage}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;

  if (match.params.id) {
    return {
      post: state.posts.find(post => post.id === match.params.id)
    }
  }

  return { posts: null };
}

export default connect(mapStateToProps, { fetchPosts })(PostPage);
