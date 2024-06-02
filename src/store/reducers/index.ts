import {combineReducers} from 'redux';
import {commentsReducer} from './commentReducer';
import {postsReducer} from './postReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
