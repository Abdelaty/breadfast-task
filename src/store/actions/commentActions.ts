import axios from 'axios';
import {Dispatch} from 'redux';
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './actionTypes';
import {Comment} from '../../models/Comments';
import webURLs from '../../services/webUrls';

export const fetchComments = (postId: number) => async (dispatch: Dispatch) => {
  dispatch({type: FETCH_COMMENTS});
  try {
    const response = await axios.get<Comment[]>(webURLs.postDetailsUrL(postId));
    dispatch({type: FETCH_COMMENTS_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: FETCH_COMMENTS_FAILURE, error});
  }
};
