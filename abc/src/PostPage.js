import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions';

class PostPage extends Component {

  componentDidMount = () => {
    const { match } = this.props;
    if (match.params.id) {
      this.props.fetchPosts(match.params.id);
    }
  }

  render() {
    return (
      <div className="panel panel-success col-sm-8 col-md-offset-2">
        <div>
        <h1>{this.props.post.title}</h1>
        <img src={this.props.post.url}></img>
        <p>{this.props.post.content}</p>
        </div>
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
