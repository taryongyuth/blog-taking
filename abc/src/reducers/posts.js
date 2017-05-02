import { SAVE_POST, POST_DELETED, SORT_POST } from '../actions/index.js';

const posts = (state = [], action = {}) => {
  switch(action.type) {
    case SAVE_POST:
      return [
        ...state,
        action.posts
      ]
      case POST_DELETED:
        return state.filter(item => item.id !== action.postId);
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
