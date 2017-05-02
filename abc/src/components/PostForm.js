import React from 'react';
import { connect } from 'react-redux';
import { savePost, deletePost } from '../actions';
import classnames from 'classnames'
import { Redirect } from 'react-router'
import  DatePicker from 'react-datepicker'
import moment from 'moment'
// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class PostForm extends React.Component {

  state = {
    id: this.props.post ? this.props.post.id : null,
    title: this.props.post ? this.props.post.title : '',
    cover: this.props.post ? this.props.post.cover : '',
    content: this.props.post ? this.props.post.content : '',
    startDate: this.props.post ? moment(this.props.post.startDate) : '',
    errors: {},
    done: false,
    isOpen: false
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name]
      this.setState({
        [e.target.name]: e.target.value,
        errors
      })
    } else{
      this.setState({ [e.target.name]: e.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let errors = {}
    if (this.state.title === '') errors.title = "Can't be empty"
    if (this.state.title.length >= 64) errors.title = "Can't be more than 64 character."
    if (this.state.content === '') errors.content = "Can't be empty"
    if (this.state.cover === '') errors.cover = "Can't be empty"
    if (this.state.startDate === '') errors.startDate = "Can't be empty"
    this.setState({errors})
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      const { title, cover, content, done, id, startDate } = this.state
      if (id !== null) { this.props.deletePost(id) }
      this.props.savePost({title, cover, content, startDate})
      this.setState({ done: true })
    }
  }

  handleDateChange = (date) =>  {
    if (!!this.state.errors.startDate) {
      let errors = Object.assign({}, this.state.errors)
      delete errors.startDate
      this.setState({
        startDate : date,
        errors
      })
    } else{
      this.setState({ startDate: date})
    }
    this.toggleCalendar()
  }

    toggleCalendar = (e) => {
      e && e.preventDefault()
      this.setState({ isOpen: !this.state.isOpen})
    }

render() {

  const form = (
    <form className="col-sm-8 col-md-offset-2" onSubmit={this.handleSubmit}>
      <h1 className="control-label">Create New Post</h1>

    <div className={classnames('form-group', { "has-error": !!this.state.errors.title })}>
      <label className="control-label" htmlFor="title">Title</label>
      <input className="form-control"
             name="title"
             id="title"
             value={this.state.title}
             onChange={this.handleChange}
      />
      <span>{this.state.errors.title}</span>
    </div>

    <div className={classnames('form-group', { "has-error": !!this.state.errors.content })}>
      <label className="control-label" htmlFor="content">Content</label>
      <textarea className="form-control"
             rows="4"
             name="content"
             id="content"
             value={this.state.content}
             onChange={this.handleChange}
      />
      <span>{this.state.errors.content}</span>
    </div>

    <div className={classnames('form-group', { "has-error": !!this.state.errors.startDate })}>
      <label className="control-label" htmlFor="date">Date:</label><br/>
      <DatePicker
        className="form-control"
        selected={this.state.startDate}
        onChange={this.handleDateChange}
        minDate={moment()}
      /><br/>
      <span>{this.state.errors.startDate}</span>
    </div>

    <div className={classnames('form-group', { "has-error": !!this.state.errors.cover })}>
      <label className="control-label" htmlFor="cover">Cover URL</label>
      <input className="form-control"
             name="cover"
             id="cover"
             value={this.state.cover}
             onChange={this.handleChange}
      />
      <span>{this.state.errors.cover}</span>
    </div>
    <br/>

    <div className="form-group">
      {this.state.cover !== '' && <img src={this.state.cover} alt="cover" />}
    </div>

  <hr />
  <div className="form-group">
    <button className="btn btn-success btn-md" >Save</button>
  </div>
  </form>
  )

    return (
      <div>
        { this.state.done ? <Redirect to="/blog-taking" /> : form }
      </div>
   )
  }
}

function mapStateToProps(state, props) {
  const { match } = props;

  if (match.params.id) {
    if (match.params.id != "new-post") {
      return {
        post: state.posts.find(post => post.id === match.params.id)
      }
    }
  }

  return { posts: null };
}

export default connect(mapStateToProps, { savePost, deletePost })(PostForm);
