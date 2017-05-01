import { v4 } from 'node-uuid'
import { loadState } from '../localStorage'

export const ADD_POST = 'ADD_POST';
export const SORT_POST = 'SORT_POST';
export const POST_DELETED = 'POST_DELETED';
export const FETCH_POST = 'FETCH_POST';

export function addPost(posts) {
  return {
    type: ADD_POST,
    posts: Object.assign({}, posts, {id: v4()})
  }
}

export function deletePost(postId) {
  return {
    type: POST_DELETED,
    postId
  }
}

export function fetchPosts(postId) {
  return{
    type: FETCH_POST,
    postId,
    loadState: loadState()
  }
}

export function sortPost(posts) {
  return {
    type: SORT_POST,
    posts: posts
  }
}
