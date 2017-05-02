import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Post({ post, deletePost }) {

  let content = post.content.substr(0,100)
  content = content.substr(0, Math.min(content.length, content.lastIndexOf(" ")))

  return (
    <div>
      <div className="list-group">
            <a className="list-group-item">
              <h2>{post.title}</h2>
              <Link to={`/post/${post.id}`}>
              <img style={{"width":"100%", "height": "230px"}} src={post.cover}></img>
              </Link>
              <blockquote>
                  <Link to={`/post/${post.id}`}><p>{content} ...( ReadMore )</p></Link>
                    <small>{moment(post.startDate).format('MM/DD/YYYY')}</small>
                    <div className="btn-group pull-right">
                      <button className="btn btn-danger btn-sm pull-right" type="button" onClick={() => deletePost(post.id)}><span className="glyphicon glyphicon-trash"></span> Delete </button>
                      <Link to={`/edit-post/${post.id}`}><button className="btn btn-primary btn-sm pull-left" type="button" ><span className="glyphicon glyphicon-edit"></span>Edit</button></Link>
                    </div>
              </blockquote>
          </a>
      </div>
    </div>
  );
}
