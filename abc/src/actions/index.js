import { v4 } from 'node-uuid'
import { loadState } from '../localStorage'

export const ADD_POST = 'ADD_POST';
export const SORT_POST = 'SORT_POST';
export const POST_DELETED = 'POST_DELETED';
export const SAVE_POST = 'SAVE_POST';

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

export function savePost(data) {
  return{
    type: SAVE_POST,
    posts: Object.assign({}, loadState(), data, {id: v4()})
  }
}

export function sortPost(posts) {
  return {
    type: SORT_POST,
    posts: posts
  }
}
