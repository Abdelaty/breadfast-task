import axios from 'axios';
import {Dispatch} from 'redux';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes';
import webURLs from '../../services/webUrls';
import {Post} from '../../models/Post';

export const fetchPosts = () => async (dispatch: Dispatch) => {
  dispatch({type: FETCH_POSTS});
  try {
    const response = await axios.get<Post[]>(webURLs.postsURL);
    dispatch({type: FETCH_POSTS_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: FETCH_POSTS_FAILURE, error});
  }
};
