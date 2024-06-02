import {Post} from '../../models/Post';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/actionTypes';

interface PostsState {
  loading: boolean;
  posts: Post[];
  error: string | null;
}

const initialState: PostsState = {
  loading: false,
  posts: [],
  error: null,
};

export const postsReducer = (state = initialState, action: any): PostsState => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, loading: true, error: null};
    case FETCH_POSTS_SUCCESS:
      return {...state, loading: false, posts: action.payload};
    case FETCH_POSTS_FAILURE:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};
