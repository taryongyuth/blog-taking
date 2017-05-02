import React from 'react'
import Post from './Post'

export default function ListPost({ posts , deletePost }) {

  const emptyMessage = (
    <p>There are no post yet in blog.</p>
  );

  const postsList = (
    <div>
      { posts.map( post => <Post post={post} key={post.id} deletePost={deletePost} />) }
    </div>
  )

  return (
    <div>
      { posts.length === 0 ? emptyMessage : postsList}
    </div>
  );
}
