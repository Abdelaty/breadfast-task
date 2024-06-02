import {Comment} from '../../models/Comments';
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from '../actions/actionTypes';

interface CommentsState {
  loading: boolean;
  comments: Comment[];
  error: string | null;
}

const initialState: CommentsState = {
  loading: false,
  comments: [],
  error: null,
};

export const commentsReducer = (
  state = initialState,
  action: any,
): CommentsState => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {...state, loading: true, error: null};
    case FETCH_COMMENTS_SUCCESS:
      return {...state, loading: false, comments: action.payload};
    case FETCH_COMMENTS_FAILURE:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};
