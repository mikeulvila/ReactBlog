import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default (state = INITIAL_STATE, action) => {
  console.log('action', action)
  switch (action.type) {
    case FETCH_POST:
      console.log('made it to fetch_post reducer')
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
