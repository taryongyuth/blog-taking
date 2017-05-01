import { ADD_POST, POST_DELETED, FETCH_POST, SORT_POST } from '../actions/index.js';

const posts = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_POST:
      return [
        ...state,
        action.posts
      ]
      case POST_DELETED:
        return state.filter(item => item.id !== action.postId);
      case FETCH_POST:
        [
          ...state,
          action.loadState === undefined ? [] : action.loadState.posts
        ]
        break;
      case SORT_POST:
        [
        ...state,
        action.posts
        ]
        break;
    default: return state;
  }
}

export default posts
